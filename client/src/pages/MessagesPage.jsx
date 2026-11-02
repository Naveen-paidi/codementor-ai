import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import api from '../services/api.js';
import {
  MessageSquare,
  Send,
  User,
  ShieldAlert,
  Clock,
  Check,
  CheckCheck,
  Search,
  Building2,
  GraduationCap,
  ArrowLeft,
  Info,
  Calendar,
  Mail,
  ShieldCheck
} from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import Badge from '../components/ui/Badge.jsx';

export default function MessagesPage() {
  const { user, sessionLoading } = useAuth();
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [searchContact, setSearchContact] = useState('');
  const messagesEndRef = useRef(null);

  const loadConversationsAndContacts = async () => {
    setLoading(true);
    try {
      const [convRes, contactsRes] = await Promise.all([
        api.getConversations(),
        api.getMessagingContacts()
      ]);
      if (convRes.success) {
        setConversations(convRes.conversations || []);
        if (convRes.conversations.length > 0 && !activeConversation) {
          setActiveConversation(convRes.conversations[0]);
        }
      }
      if (contactsRes.success) {
        setContacts(contactsRes.contacts || []);
      }
    } catch (err) {
      console.error('Error loading conversations:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (sessionLoading) return;
    const token = localStorage.getItem('supabase_auth_token');
    if (!token || user?.isGuest) {
      setLoading(false);
      return;
    }
    loadConversationsAndContacts();
  }, [user?.id, user?.isGuest, sessionLoading]);

  const loadMessages = async (convId) => {
    try {
      const res = await api.getMessages(convId);
      if (res.success) {
        setMessages(res.messages || []);
      }
    } catch (err) {
      console.error('Error loading messages:', err);
    }
  };

  useEffect(() => {
    if (activeConversation) {
      loadMessages(activeConversation.id);
      const interval = setInterval(() => {
        loadMessages(activeConversation.id);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [activeConversation]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !activeConversation || sending) return;

    setSending(true);
    try {
      const receiverId = activeConversation.other_user?.id;
      const res = await api.sendMessage(receiverId, newMessage.trim());
      if (res.success) {
        setNewMessage('');
        setMessages(prev => [...prev, res.message]);
        loadConversationsAndContacts();
      }
    } catch (err) {
      console.error('Error sending message:', err);
    } finally {
      setSending(false);
    }
  };

  const startConversationWithContact = async (contact) => {
    const existing = conversations.find(c => c.other_user?.id === contact.id);
    if (existing) {
      setActiveConversation(existing);
    } else {
      const tempConv = {
        id: `temp-${contact.id}`,
        other_user: contact,
        unread_count: 0
      };
      setActiveConversation(tempConv);
      setMessages([]);
    }
  };

  const filteredContacts = contacts.filter(c =>
    (c.full_name || '').toLowerCase().includes(searchContact.toLowerCase()) ||
    (c.relationship || '').toLowerCase().includes(searchContact.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12 select-none">
      {/* Header */}
      <div className="border-b border-[#DCE8E8] dark:border-white/10 pb-4">
        <div className="flex items-center gap-2 text-[#0F766E] dark:text-cyan-400 font-bold text-xs tracking-wider uppercase mb-1">
          <MessageSquare className="w-4 h-4 text-[#0F766E] dark:text-cyan-400" /> Academic & Institutional Channels
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#172B3A] dark:text-white tracking-tight">Institutional Messaging</h1>
        <p className="text-xs text-[#64748B] dark:text-slate-400 mt-1">
          Authorized communication channels between learners, assigned faculty mentors, and college administrators.
        </p>
      </div>

      {/* Main Messaging Interface (3-Column Desktop Structure) */}
      <div className="bg-white dark:bg-[#070B20]/90 rounded-3xl border border-[#DCE8E8] dark:border-white/10 shadow-sm dark:shadow-[0_0_30px_rgba(34,211,238,0.05)] overflow-hidden flex flex-col md:flex-row min-h-[580px] h-[calc(100vh-220px)]">
        {/* Column 1: Conversations & Contacts */}
        <div className={`w-full md:w-80 border-r border-[#DCE8E8] dark:border-white/10 flex flex-col bg-[#F5FAFA] dark:bg-[#030617]/70 ${
          activeConversation ? 'hidden md:flex' : 'flex'
        }`}>
          <div className="p-4 border-b border-[#DCE8E8] dark:border-white/10 space-y-3">
            <h2 className="text-xs font-bold text-[#172B3A] dark:text-white uppercase tracking-wider">Conversations</h2>
            {/* Quick search */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#64748B] dark:text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search threads..."
                value={searchContact}
                onChange={(e) => setSearchContact(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-white dark:bg-[#070B20] border border-[#DCE8E8] dark:border-white/10 text-xs text-[#172B3A] dark:text-white placeholder-[#64748B] dark:placeholder-slate-500 focus:outline-none focus:border-[#0F766E] dark:focus:border-cyan-400 transition-colors"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-[#DCE8E8]/60 dark:divide-white/5">
            {conversations.length === 0 && contacts.length === 0 ? (
              <div className="p-6 text-center text-xs text-[#64748B] dark:text-slate-400 space-y-2">
                <MessageSquare className="w-8 h-8 mx-auto text-[#DCE8E8] dark:text-slate-600" />
                <p>No active conversations yet.</p>
                {user?.role === 'user' && !user?.college_id && (
                  <p className="text-[11px] text-[#0F766E] dark:text-cyan-400 font-medium">
                    Affiliate with a college to connect with faculty mentors.
                  </p>
                )}
              </div>
            ) : null}

            {/* Existing Conversations */}
            {conversations.map((conv) => {
              const isActive = activeConversation?.id === conv.id;
              return (
                <button
                  key={conv.id}
                  onClick={() => setActiveConversation(conv)}
                  className={`w-full text-left p-3.5 transition-colors flex items-start gap-3 cursor-pointer ${
                    isActive ? 'bg-[#ECFDF5] dark:bg-white/10 border-l-4 border-[#0F766E] dark:border-cyan-400 shadow-2xs' : 'hover:bg-white dark:hover:bg-white/5'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#064E52] via-[#0F766E] to-[#10B981] dark:from-cyan-600 dark:via-blue-600 dark:to-purple-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                    {conv.other_user?.full_name?.charAt(0) || 'U'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#172B3A] dark:text-white truncate">
                        {conv.other_user?.full_name || 'User'}
                      </span>
                      {conv.unread_count > 0 && (
                        <span className="px-1.5 py-0.5 rounded-full bg-[#10B981] dark:bg-cyan-500 text-white text-[10px] font-bold">
                          {conv.unread_count}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-[#0F766E] dark:text-cyan-400 font-bold block uppercase tracking-wider">
                      {conv.other_user?.role || 'Member'}
                    </span>
                    <p className="text-[11px] text-[#64748B] dark:text-slate-400 truncate mt-0.5">
                      {conv.last_message?.content || 'Started conversation'}
                    </p>
                  </div>
                </button>
              );
            })}

            {/* Authorized Contacts list */}
            {filteredContacts.length > 0 && (
              <div className="p-3 bg-[#ECFDF5]/50 dark:bg-white/5 border-t border-[#DCE8E8] dark:border-white/10">
                <span className="text-[10px] font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-wider block mb-2">
                  Authorized Contacts ({filteredContacts.length})
                </span>
                <div className="space-y-1.5">
                  {filteredContacts.map((contact) => (
                    <button
                      key={contact.id}
                      onClick={() => startConversationWithContact(contact)}
                      className="w-full text-left p-2.5 rounded-xl bg-white dark:bg-[#070B20] border border-[#DCE8E8] dark:border-white/10 hover:border-[#0F766E] dark:hover:border-cyan-400 text-xs flex items-center justify-between transition-all cursor-pointer shadow-2xs hover:shadow-xs"
                    >
                      <div className="truncate">
                        <span className="font-bold text-[#172B3A] dark:text-white block truncate">{contact.full_name}</span>
                        <span className="text-[10px] text-[#64748B] dark:text-slate-400">{contact.relationship}</span>
                      </div>
                      <Send className="w-3.5 h-3.5 text-[#0F766E] dark:text-cyan-400 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Column 2: Message History & Send */}
        <div className={`flex-1 flex flex-col bg-white dark:bg-[#070B20] ${
          !activeConversation ? 'hidden md:flex' : 'flex'
        }`}>
          {activeConversation ? (
            <>
              {/* Active Conversation Header */}
              <div className="p-3.5 sm:p-4 border-b border-[#DCE8E8] dark:border-white/10 flex items-center justify-between bg-white dark:bg-[#070B20]">
                <div className="flex items-center gap-3">
                  {/* Mobile Back Button */}
                  <button
                    onClick={() => setActiveConversation(null)}
                    className="md:hidden p-1.5 rounded-lg text-[#64748B] dark:text-slate-400 hover:bg-[#F5FAFA] dark:hover:bg-white/5 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#064E52] via-[#0F766E] to-[#10B981] dark:from-cyan-600 dark:via-blue-600 dark:to-purple-600 text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
                    {activeConversation.other_user?.full_name?.charAt(0) || 'U'}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#172B3A] dark:text-white text-sm">
                      {activeConversation.other_user?.full_name || 'User'}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] text-[#64748B] dark:text-slate-400">
                      <span className="uppercase font-bold text-[#0F766E] dark:text-cyan-400 text-[10px]">
                        {activeConversation.other_user?.role}
                      </span>
                      <span>•</span>
                      <span className="truncate max-w-[160px] sm:max-w-none">{activeConversation.other_user?.email}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages Scroll Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F5FAFA] dark:bg-[#030617]/50">
                {messages.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#64748B] dark:text-slate-400 space-y-2">
                    <MessageSquare className="w-8 h-8 text-[#DCE8E8] dark:text-slate-600" />
                    <p className="text-xs font-semibold text-[#172B3A] dark:text-white">No messages yet in this authorized thread.</p>
                    <p className="text-[11px] text-[#64748B] dark:text-slate-400 max-w-sm">
                      Send a message below to consult with your academic partner.
                    </p>
                  </div>
                ) : (
                  messages.map((msg) => {
                    const isMe = msg.sender_id === user?.id;
                    return (
                      <div
                        key={msg.id}
                        className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                      >
                        <div
                          className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-xs shadow-2xs ${
                            isMe
                              ? 'bg-gradient-to-r from-[#064E52] to-[#0F766E] dark:from-cyan-600 dark:to-blue-600 text-white rounded-br-xs'
                              : 'bg-[#ECFDF5] dark:bg-white/10 border border-[#A7F3D0] dark:border-white/10 text-[#172B3A] dark:text-white rounded-bl-xs'
                          }`}
                        >
                          <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                        </div>
                        <div className="flex items-center gap-1 mt-1 text-[10px] text-[#64748B] dark:text-slate-500 px-1">
                          <span>{new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                          {isMe && (
                            msg.is_read ? <CheckCheck className="w-3 h-3 text-[#10B981] dark:text-cyan-400" /> : <Check className="w-3 h-3" />
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input Box */}
              <form onSubmit={handleSendMessage} className="p-3 border-t border-[#DCE8E8] dark:border-white/10 bg-white dark:bg-[#070B20] flex items-center gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message here... (Enter to send)"
                  className="flex-1 px-4 py-2.5 bg-[#F5FAFA] dark:bg-[#030617] border border-[#DCE8E8] dark:border-white/10 rounded-xl text-xs text-[#172B3A] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20 dark:focus:ring-cyan-500/20 focus:border-[#0F766E] dark:focus:border-cyan-400 transition-all placeholder-[#64748B] dark:placeholder-slate-500"
                />
                <Button
                  type="submit"
                  size="sm"
                  variant="primary"
                  isLoading={sending}
                  disabled={!newMessage.trim()}
                  className="px-4 font-bold bg-[#10B981] dark:bg-cyan-500 hover:bg-[#059669] dark:hover:bg-cyan-400 text-white dark:text-black"
                >
                  <Send className="w-3.5 h-3.5 mr-1" /> Send
                </Button>
              </form>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-[#64748B] dark:text-slate-400 space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] dark:bg-cyan-500/10 text-[#0F766E] dark:text-cyan-400 flex items-center justify-center shadow-xs border border-[#A7F3D0] dark:border-cyan-500/30">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-[#172B3A] dark:text-white text-sm">Select an Authorized Conversation</h3>
              <p className="text-xs text-[#64748B] dark:text-slate-400 max-w-sm">
                Choose a conversation from the sidebar or click an authorized contact to start exchanging academic feedback.
              </p>
            </div>
          )}
        </div>

        {/* Column 3: Contact Details (Desktop 3-Column Layout) */}
        {activeConversation && (
          <div className="hidden lg:flex flex-col w-72 border-l border-[#DCE8E8] dark:border-white/10 bg-[#F5FAFA] dark:bg-[#030617]/70 p-5 space-y-5">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#064E52] via-[#0F766E] to-[#10B981] dark:from-cyan-600 dark:via-blue-600 dark:to-purple-600 text-white flex items-center justify-center font-black text-xl mx-auto shadow-md shadow-[#064E52]/20">
                {activeConversation.other_user?.full_name?.charAt(0) || 'U'}
              </div>
              <h4 className="text-sm font-bold text-[#172B3A] dark:text-white">
                {activeConversation.other_user?.full_name || 'Academic Contact'}
              </h4>
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#ECFDF5] dark:bg-cyan-500/10 text-[#0F766E] dark:text-cyan-400 border border-[#A7F3D0] dark:border-cyan-500/30">
                {activeConversation.other_user?.role?.replace('_', ' ') || 'Member'}
              </span>
            </div>

            <div className="space-y-3 text-xs pt-2 border-t border-[#DCE8E8] dark:border-white/10">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-wider block">Email</span>
                <span className="text-[#172B3A] dark:text-slate-200 font-medium break-all">{activeConversation.other_user?.email || 'N/A'}</span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-wider block">Channel Security</span>
                <span className="inline-flex items-center gap-1.5 text-[#065F46] dark:text-emerald-400 font-medium bg-[#ECFDF5] dark:bg-emerald-500/10 px-2 py-0.5 rounded-md border border-[#A7F3D0] dark:border-emerald-500/30 text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#10B981] dark:text-emerald-400" /> Role-Authorized
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 text-[11px] text-slate-400 dark:text-slate-500 leading-relaxed">
              All messages sent through this channel comply with institutional academic integrity policies and are recorded for audit compliance.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
