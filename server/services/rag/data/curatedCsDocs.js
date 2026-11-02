/**
 * Curated Computer Science Knowledge Base
 * ----------------------------------------
 * High-quality, trusted technical documentation and specifications covering:
 * - Data Structures & Algorithms
 * - Core Programming Languages (Java, Python, C, C++, JavaScript/React)
 * - Operating Systems
 * - Computer Networks
 * - Database Management Systems (DBMS)
 * - Object-Oriented Programming & SOLID Principles
 * - System Design & Technical Interview Preparation
 */

export const CURATED_CS_DOCUMENTS = [
  // 1. DATA STRUCTURES: HASH MAPS
  {
    id: 'doc-cs-hash-tables',
    title: 'Hash Tables, Hashing & Java HashMap Internal Architecture',
    content: `# Hash Tables and Hashing Algorithms
A Hash Table is an associative data structure that maps keys to values using a hash function. It provides average-case O(1) time complexity for insertion, deletion, and lookup operations.

## Hash Collision Resolution
When two distinct keys produce the same hash code (hash collision), common resolution strategies include:
1. **Separate Chaining**: Each bucket contains a linked list or balanced binary search tree of entries that hash to the same index.
2. **Open Addressing**: All elements occupy the bucket array itself. On collision, probe sequences are searched (Linear Probing, Quadratic Probing, or Double Hashing).

## Java HashMap Internal Working
- In Java 8 and later, \`java.util.HashMap\` uses an array of \`Node<K,V>\` buckets.
- Default initial capacity is 16; default load factor is 0.75.
- When the number of elements exceeds \`capacity * loadFactor\` (12 elements initially), the backing array doubles in size (rehashing).
- **Treeification**: When a single bucket list length exceeds the threshold \`TREEIFY_THRESHOLD = 8\` and total table capacity is at least 64, the linked list is transformed into a Red-Black Tree (\`TreeNode\`), improving worst-case search complexity from O(N) to O(log N).
- \`ConcurrentHashMap\` enables thread-safe concurrent reads and segmented bucket-level locking without blocking the entire table.`,
    category: 'CS_KNOWLEDGE',
    topic: 'Data Structures',
    subtopic: 'Hash Tables & Hashing',
    language: 'java',
    sourceType: 'OFFICIAL_DOCUMENTATION',
    sourceName: 'Oracle Java Platform Documentation',
    sourceUrl: 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html',
    version: '1.0'
  },

  // 2. ALGORITHMS: BINARY SEARCH
  {
    id: 'doc-cs-binary-search',
    title: 'Binary Search Algorithm, Complexity & Implementations',
    content: `# Binary Search Algorithm
Binary Search is a divide-and-conquer search algorithm that finds the position of a target value within a sorted array in O(log N) time and O(1) auxiliary space.

## Algorithmic Principle
1. Maintain two pointers: \`low\` and \`high\`.
2. Compute the midpoint: \`mid = low + Math.floor((high - low) / 2)\` (to avoid integer overflow in languages like Java, C, and C++).
3. If \`array[mid] === target\`, return \`mid\`.
4. If \`array[mid] < target\`, search the right half: \`low = mid + 1\`.
5. If \`array[mid] > target\`, search the left half: \`high = mid - 1\`.
6. Terminate when \`low > high\` (target not present).

## Code Implementations

### Python Implementation
\`\`\`python
def binary_search(arr: list[int], target: int) -> int:
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
\`\`\`

### Java Implementation
\`\`\`java
public class BinarySearch {
    public static int search(int[] arr, int target) {
        int low = 0, high = arr.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (arr[mid] == target) return mid;
            else if (arr[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }
}
\`\`\``,
    category: 'CS_KNOWLEDGE',
    topic: 'Algorithms',
    subtopic: 'Binary Search',
    sourceType: 'OFFICIAL_DOCUMENTATION',
    sourceName: 'Algorithm Engineering Handbook',
    sourceUrl: 'https://en.wikipedia.org/wiki/Binary_search_algorithm',
    version: '1.0'
  },

  // 3. OBJECT-ORIENTED PROGRAMMING: POLYMORPHISM & OOP
  {
    id: 'doc-cs-oop-polymorphism',
    title: 'Object-Oriented Programming: Polymorphism, Inheritance & SOLID Principles',
    content: `# Object-Oriented Programming (OOP) & Polymorphism
Object-Oriented Programming organizes software design around data or objects rather than functions and logic.

## The Four Pillars of OOP
1. **Encapsulation**: Bundling data (attributes) and methods that operate on that data into a single unit (class), restricting direct access via access modifiers (private, protected, public).
2. **Abstraction**: Hiding internal implementation complexities and exposing only essential interfaces to callers.
3. **Inheritance**: Enabling a child class (subclass) to inherit attributes and methods from a parent class (superclass), promoting code reuse.
4. **Polymorphism**: The ability of an entity to take multiple forms.

## Types of Polymorphism
- **Compile-time Polymorphism (Static / Early Binding)**:
  - *Method Overloading*: Multiple methods in the same class share the same name but differ in parameters (number, types, or order).
  - *Operator Overloading*: Supported in C++ and Python; not supported in Java.
- **Runtime Polymorphism (Dynamic / Late Binding)**:
  - *Method Overriding*: A subclass provides a specific implementation of a method already declared in its superclass using identical method signatures. Dynamic method dispatch resolves the call at runtime based on the actual object instance.

## SOLID Principles
- **S**: Single Responsibility Principle (A class should have one reason to change).
- **O**: Open/Closed Principle (Open for extension, closed for modification).
- **L**: Liskov Substitution Principle (Subtypes must be substitutable for their base types).
- **I**: Interface Segregation Principle (Clients should not be forced to depend on unused interfaces).
- **D**: Dependency Inversion Principle (High-level modules should depend on abstractions, not concretions).`,
    category: 'CS_KNOWLEDGE',
    topic: 'Software Engineering',
    subtopic: 'Object-Oriented Programming & SOLID',
    sourceType: 'OFFICIAL_DOCUMENTATION',
    sourceName: 'Software Engineering Principles',
    sourceUrl: 'https://en.wikipedia.org/wiki/SOLID',
    version: '1.0'
  },

  // 4. OPERATING SYSTEMS: DEADLOCKS & CONCURRENCY
  {
    id: 'doc-cs-os-deadlocks',
    title: 'Operating Systems: Deadlocks, Coffman Conditions & Concurrency',
    content: `# Operating Systems: Deadlocks & Synchronization
A Deadlock is a permanent state where two or more processes are blocked because each process holds a resource while waiting for another resource held by another process in the cycle.

## The Four Coffman Conditions
All four conditions must hold simultaneously for a deadlock to occur:
1. **Mutual Exclusion**: At least one resource must be held in a non-shareable mode (only one process can use it at a time).
2. **Hold and Wait**: A process must currently hold at least one resource while waiting to acquire additional resources held by other processes.
3. **No Preemption**: Resources cannot be forcibly taken from a process; they can only be released voluntarily after the process finishes its task.
4. **Circular Wait**: A closed chain of processes exists such that each process holds at least one resource needed by the next process in the chain (P0 waits for P1, P1 waits for P2 ... Pn waits for P0).

## Deadlock Handling Strategies
- **Deadlock Prevention**: Invalidate at least one of the four Coffman conditions (e.g., impose strict global resource ordering to break circular wait).
- **Deadlock Avoidance**: The OS analyzes every resource request dynamically using safety algorithms (such as Dijkstra's **Banker's Algorithm**) to ensure the system never transitions into an unsafe state.
- **Deadlock Detection and Recovery**: Allow deadlocks to occur, periodically detect cycles using a Resource Allocation Graph (Wait-For Graph), and recover by process termination or resource preemption.`,
    category: 'CS_KNOWLEDGE',
    topic: 'Operating Systems',
    subtopic: 'Deadlocks & Process Synchronization',
    sourceType: 'OFFICIAL_DOCUMENTATION',
    sourceName: 'Silberschatz Operating System Concepts',
    sourceUrl: 'https://en.wikipedia.org/wiki/Deadlock_(computer_science)',
    version: '1.0'
  },

  // 5. COMPUTER NETWORKS: TCP, UDP & OSI MODEL
  {
    id: 'doc-cs-networks-tcp-udp',
    title: 'Computer Networks: TCP vs UDP, Three-Way Handshake & OSI Model',
    content: `# Computer Networks: Transport Protocols & OSI Model
Computer networking protocols facilitate reliable and efficient data exchange between distributed hosts.

## OSI 7-Layer Model
1. **Physical Layer**: Raw bit transmission over physical media (cables, fiber, radio frequencies).
2. **Data Link Layer**: Node-to-node framing, MAC addressing, error detection (Ethernet, Wi-Fi).
3. **Network Layer**: Logical routing, packet forwarding, IP addressing (IPv4, IPv6, ICMP).
4. **Transport Layer**: End-to-end communication, segmentation, flow and error control (TCP, UDP).
5. **Session Layer**: Establishing, managing, and terminating sessions between applications.
6. **Presentation Layer**: Data formatting, character encoding, compression, and encryption (TLS/SSL).
7. **Application Layer**: End-user application interfaces (HTTP, HTTPS, DNS, FTP, SMTP, SSH).

## TCP vs UDP Comparison
- **TCP (Transmission Control Protocol)**:
  - Connection-oriented protocol.
  - Guarantees ordered delivery, reliability via acknowledgments (ACK), retransmission of lost packets.
  - Implements flow control (sliding window) and congestion control (Slow Start, Congestion Avoidance).
  - Used for web browsing (HTTP/HTTPS), file transfers (FTP), emails (SMTP).
- **UDP (User Datagram Protocol)**:
  - Connectionless, lightweight datagram protocol.
  - No connection handshake, no ordering guarantees, no retransmissions.
  - Low latency, minimal overhead; ideal for live streaming, gaming, VoIP, and DNS queries.

## TCP Three-Way Handshake
1. **SYN**: Client sends a SYN segment with initial sequence number (\`seq = X\`) to initiate connection.
2. **SYN-ACK**: Server responds with SYN segment with its own sequence number (\`seq = Y\`) and acknowledges the client's sequence number (\`ack = X + 1\`).
3. **ACK**: Client replies with an ACK segment (\`ack = Y + 1\`). Connection enters ESTABLISHED state.`,
    category: 'CS_KNOWLEDGE',
    topic: 'Computer Networks',
    subtopic: 'Transport Protocols & OSI Model',
    sourceType: 'OFFICIAL_DOCUMENTATION',
    sourceName: 'IETF RFC Specifications',
    sourceUrl: 'https://tools.ietf.org/html/rfc793',
    version: '1.0'
  },

  // 6. DBMS: ACID PROPERTIES & TRANSACTIONS
  {
    id: 'doc-cs-dbms-acid',
    title: 'Database Management Systems: ACID Properties, Normalization & Indexing',
    content: `# Database Management Systems (DBMS)
A relational database management system ensures reliability and consistency through transaction management, normalization, and efficient indexing structures.

## ACID Properties of Transactions
1. **Atomicity**: "All or nothing." A transaction is an indivisible unit of work. If any operation within the transaction fails, the entire transaction is rolled back.
2. **Consistency**: Transactions transition the database from one valid state to another valid state, maintaining all integrity constraints, foreign keys, and business rules.
3. **Isolation**: Concurrent transactions execute without interfering with one another. Standard SQL isolation levels:
   - *Read Uncommitted* (allows dirty reads)
   - *Read Committed* (prevents dirty reads)
   - *Repeatable Read* (prevents non-repeatable reads; default in MySQL InnoDB)
   - *Serializable* (highest level; fully serial execution preventing phantom reads)
4. **Durability**: Once a transaction is committed, its changes are permanently recorded in non-volatile storage (via Write-Ahead Logging / WAL), persisting even across server crashes.

## Normalization Forms
- **1NF (First Normal Form)**: Eliminate repeating groups; ensure all column values are atomic.
- **2NF (Second Normal Form)**: Meet 1NF and eliminate partial functional dependencies (all non-key attributes fully depend on the complete primary key).
- **3NF (Third Normal Form)**: Meet 2NF and eliminate transitive dependencies (non-key attributes do not depend on other non-key attributes).

## Indexing & B-Trees
- Database indexes speed up queries from O(N) full-table scans to O(log N) tree lookups.
- **B+ Trees**: Balanced multi-way search trees where all actual data records or row pointers reside in leaf nodes, linked sequentially for efficient range scans. Internal nodes store only search routing keys.`,
    category: 'CS_KNOWLEDGE',
    topic: 'Databases',
    subtopic: 'ACID Properties & Database Design',
    sourceType: 'OFFICIAL_DOCUMENTATION',
    sourceName: 'PostgreSQL Documentation',
    sourceUrl: 'https://www.postgresql.org/docs/current/tutorial-transactions.html',
    version: '1.0'
  },

  // 7. WEB DEVELOPMENT: REACT HOOKS & COMPONENT LIFECYCLE
  {
    id: 'doc-cs-react-hooks',
    title: 'React 19 & Modern React Hooks Architecture',
    content: `# React Architecture and Modern React Hooks
React is a declarative, component-based JavaScript library for building user interfaces using a Virtual DOM for efficient rendering.

## Core React Hooks
1. **\`useState(initialState)\`**:
   - Manages state within functional components.
   - Triggers re-renders when setter is called with a distinct value (using \`Object.is\` comparison).
2. **\`useEffect(callback, dependencies)\`**:
   - Performs side effects (fetching data, DOM manipulation, subscriptions, timers).
   - Runs after render. Cleanup function runs before unmount or prior to re-running the effect when dependencies change.
3. **\`useMemo(factory, deps)\`**:
   - Caches the calculated return value of an expensive computation between renders until dependencies update.
4. **\`useCallback(fn, deps)\`**:
   - Caches a function definition between renders to preserve reference equality when passing callbacks to memoized child components (\`React.memo\`).
5. **\`useRef(initialValue)\`**:
   - Persists a mutable value across renders without triggering a re-render when mutated. Commonly used to access direct DOM nodes.

## Rules of Hooks
- Call hooks ONLY at the top level of React function components or custom hooks.
- NEVER call hooks inside loops, conditional statements, or nested functions.

## Virtual DOM & Reconciliation
React creates an in-memory Virtual DOM tree representing the UI. When state updates, React constructs a new Virtual DOM tree, runs the **Diffing Algorithm** (Fiber reconciler) in O(N) time, and batches minimal DOM mutations to the actual browser DOM.`,
    category: 'PROGRAMMING',
    topic: 'Frontend Development',
    subtopic: 'React Hooks & Virtual DOM',
    language: 'javascript',
    sourceType: 'OFFICIAL_DOCUMENTATION',
    sourceName: 'React Documentation',
    sourceUrl: 'https://react.dev/reference/react',
    version: '1.0'
  },

  // 8. TECHNICAL INTERVIEW PREPARATION & CAREER GUIDANCE
  {
    id: 'doc-cs-interview-prep',
    title: 'Software Engineering Technical Interview Preparation & Career Roadmaps',
    content: `# Technical Interview Preparation & Career Guidance
Comprehensive roadmap for campus placements, technical assessments, and software engineering interviews.

## Coding Interview Strategy
1. **Clarify Requirements**: Always confirm input format, edge cases (empty array, null, negative numbers, extreme constraints), and expected return types.
2. **State Brute Force**: State the brute force approach first with its Big-O time and space complexity before optimizing.
3. **Optimize Using Core Patterns**:
   - Two Pointers & Sliding Window (Sorted arrays, subarrays, substring problems)
   - Fast & Slow Pointers (Cycle detection in linked lists)
   - Hash Maps (Frequency counting, Two Sum, caching lookups)
   - Monotonic Stack (Next greater element, histogram areas)
   - Breadth-First Search (Shortest path in unweighted graphs)
   - Depth-First Search / Backtracking (Permutations, subsets, combinations)
   - Dynamic Programming (Optimal substructure, overlapping subproblems)
4. **Dry Run with Sample Cases**: Walk through code line-by-line with sample inputs before declaring your solution complete.

## Software Engineering Resume Best Practices
- **Format**: Single page, clean typography, PDF format.
- **Projects**: Use the **XYZ formula** ("Accomplished [X] as measured by [Y], by doing [Z]").
  *Example*: "Engineered a full-stack learning platform using React, Node.js, and PostgreSQL, reducing query latency by 45% through B-Tree indexing."
- **Technical Skills**: Group by Languages (Java, Python, C++), Frameworks (React, Express, Spring Boot), Databases & Tools (PostgreSQL, Git, Docker).
- **GitHub & Code Portfolio**: Showcase active open-source contributions, clean commits, and well-documented README files.`,
    category: 'CAREER_GUIDANCE',
    topic: 'Career Guidance',
    subtopic: 'Technical Interview Preparation',
    sourceType: 'OFFICIAL_DOCUMENTATION',
    sourceName: 'CodeMentor Career Advisory',
    sourceUrl: '/interview-prep',
    version: '1.0'
  }
];

