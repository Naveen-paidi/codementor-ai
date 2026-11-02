/**
 * Python Curriculum — Advanced Level (GeeksforGeeks-Style Structure)
 * Modules 17-20: Metaprogramming & Internals, Concurrency & Async,
 * Networking/APIs/Databases, Performance/Packaging/Architecture.
 *
 * Each topic follows: Overview -> Objectives -> Prerequisites -> Concept ->
 * Detailed Explanation -> Syntax -> How It Works -> Examples ->
 * Common Mistakes -> Quick Checks -> Practice Questions -> Difficulty
 *
 * Self-contained local curriculum source of truth.
 */

export const pythonAdvanced = {
  id: 'python-advanced',
  title: 'Level 3: Python Advanced Systems & Architecture',
  level: 3,
  difficulty: 'advanced',
  description:
    'Deep dive into Python internals, CPython memory architecture, metaclasses, descriptors, threading, multiprocessing, asyncio, database systems, profiling, and production packaging.',

  modules: [
    // =============================================================
    // MODULE 17: METAPROGRAMMING & CPYTHON INTERNALS
    // =============================================================
    {
      id: 'python-mod-metaprogramming-internals',
      title: 'Metaprogramming & CPython Internals',
      order: 17,
      description:
        'Metaclasses, type constructor, descriptors protocol, coroutines, and CPython garbage collection internals.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 17.1: METACLASSES
        // ---------------------------------------------------------
        {
          id: 'python-metaclasses',
          title: 'Metaclasses and type()',
          slug: 'metaclasses',
          description:
            'Classes that create classes: deep metaprogramming using type and metaclass hooks.',
          learningObjectives: [
            'Understand that in Python, classes are instances of metaclasses.',
            'Use type(name, bases, dict) dynamically.',
            'Write custom metaclasses inheriting from type.',
          ],
          prerequisites: [
            'python-classes-and-objects',
            'python-advanced-oop',
          ],
          conceptSummary:
            'A metaclass is the class of a class. It defines how a class is constructed, instantiated, and validated.',
          detailedExplanation:
            'In Python, everything is an object, including classes. The default metaclass that creates classes is `type`. By defining a custom metaclass `class Meta(type):`, you can intercept, modify, validate, or auto-register classes at the moment they are defined.',
          syntaxExplanation:
            '# Dynamic class creation with type:\nMyClass = type("MyClass", (object,), {"x": 10})\n\n# Custom metaclass:\nclass ValidatorMeta(type):\n    def __new__(mcs, name, bases, namespace):\n        return super().__new__(mcs, name, bases, namespace)\n\nclass Model(metaclass=ValidatorMeta):\n    pass',
          howItWorks: [
            'CPython calls Metaclass.__new__ and __init__ during class statement evaluation.',
          ],
          examples: [
            {
              title: 'Auto-Registering Plugins with Metaclass',
              code:
                'registry = {}\n\nclass PluginMeta(type):\n    def __new__(mcs, name, bases, attrs):\n        cls = super().__new__(mcs, name, bases, attrs)\n        if name != "BasePlugin":\n            registry[name.lower()] = cls\n        return cls\n\nclass BasePlugin(metaclass=PluginMeta):\n    pass\n\nclass AuthPlugin(BasePlugin): pass\nclass MetricsPlugin(BasePlugin): pass\n\nprint("Registered plugins:", list(registry.keys()))',
              explanation:
                'Automatically discovers and indexes subclasses upon definition.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using metaclasses when class decorators or __init_subclass__ would suffice.',
              explanation:
                'PEP 487 __init_subclass__ solves 90% of metaclass use cases with much simpler syntax.',
            },
          ],
          quickChecks: [
            {
              question:
                'What is the default metaclass for all classes in Python 3?',
              answer: 'type',
              options: ['object', 'type', 'metaclass', 'Class'],
              correctAnswer: 1,
              explanation:
                'type is the default metaclass responsible for class construction.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Use __init_subclass__ to enforce that every subclass defines an API_VERSION attribute',
              difficulty: 'advanced',
              concepts: ['metaclasses', '__init_subclass__'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 30,
        },

        // ---------------------------------------------------------
        // TOPIC 17.2: DESCRIPTORS
        // ---------------------------------------------------------
        {
          id: 'python-descriptors-protocol',
          title: 'The Descriptor Protocol',
          slug: 'descriptors-protocol',
          description:
            'Behind the scenes of properties, methods, and ORMs: __get__, __set__, and __delete__.',
          learningObjectives: [
            'Implement the descriptor protocol (__get__, __set__, __delete__).',
            'Differentiate between data descriptors and non-data descriptors.',
            'Understand how Python attribute lookup uses descriptors.',
          ],
          prerequisites: ['python-encapsulation-and-properties'],
          conceptSummary:
            'Descriptors are objects that customize attribute lookup, assignment, and deletion by implementing `__get__`, `__set__`, and `__delete__`.',
          detailedExplanation:
            'The descriptor protocol powers almost all high-level Python features: `@property`, `@classmethod`, `@staticmethod`, and ORM field definitions in Django/SQLAlchemy. When `obj.attr` is accessed, Python checks if `attr` is a descriptor and executes its `__get__()` method.',
          syntaxExplanation:
            'class IntegerField:\n    def __set_name__(self, owner, name):\n        self.name = name\n    def __get__(self, instance, owner):\n        if instance is None: return self\n        return instance.__dict__.get(self.name)\n    def __set__(self, instance, value):\n        if not isinstance(value, int): raise TypeError("Must be int")\n        instance.__dict__[self.name] = value',
          howItWorks: [
            'CPython type lookup slot (tp_descr_get) intercepts attribute access.',
          ],
          examples: [
            {
              title: 'Validating Field Descriptors',
              code:
                'class BoundedNumber:\n    def __init__(self, min_val, max_val):\n        self.min_val = min_val\n        self.max_val = max_val\n    def __set_name__(self, owner, name):\n        self.name = name\n    def __set__(self, instance, val):\n        if not (self.min_val <= val <= self.max_val):\n            raise ValueError(f"{self.name} out of bounds [{self.min_val}, {self.max_val}]")\n        instance.__dict__[self.name] = val\n\nclass GameCharacter:\n    health = BoundedNumber(0, 100)\n    def __init__(self, hp):\n        self.health = hp\n\nhero = GameCharacter(85)\nprint("Hero health:", hero.health)',
              explanation:
                'Enforces attribute bounds using a reusable descriptor.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Storing instance values directly in self instead of instance.__dict__.',
              explanation:
                'Causes all instances to share the same descriptor state; values must be stored in instance.__dict__.',
            },
          ],
          quickChecks: [
            {
              question:
                'What defines a "Data Descriptor" in Python?',
              answer: 'A descriptor that implements __set__ or __delete__',
              options: [
                'A descriptor stored in a database',
                'A descriptor that implements __set__ or __delete__',
                'Any descriptor with type annotations',
                'A descriptor that returns numbers',
              ],
              correctAnswer: 1,
              explanation:
                'Data descriptors implement __set__ or __delete__, taking precedence over instance __dict__.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Build a TypeEnforced descriptor that verifies attribute assignments match a given type',
              difficulty: 'advanced',
              concepts: ['descriptors', '__set_name__', '__set__'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 30,
        },

        // ---------------------------------------------------------
        // TOPIC 17.3: MEMORY MANAGEMENT AND GC
        // ---------------------------------------------------------
        {
          id: 'python-memory-management-gc',
          title: 'Memory Management and Garbage Collection',
          slug: 'memory-management-gc',
          description:
            'CPython memory model, reference counting, cyclic garbage collector, and the gc module.',
          learningObjectives: [
            'Understand CPython reference counting.',
            'Recognize reference cycles and circular leaks.',
            'Configure generational garbage collection via the gc module.',
            'Inspect memory with sys.getrefcount and tracemalloc.',
          ],
          prerequisites: ['python-intermediate'],
          conceptSummary:
            'CPython manages memory primarily through reference counting, supplemented by a generational cyclic garbage collector.',
          detailedExplanation:
            "Every Python object has a reference count (`ob_refcnt`). When an object's reference count drops to zero, its memory is deallocated immediately. Circular references (Object A points to B, B points to A) prevent reference counts from reaching zero; CPython's cyclic garbage collector periodically scans Generation 0, 1, and 2 buckets to break cycles.",
          syntaxExplanation:
            'import sys, gc\nx = [1, 2, 3]\nprint("Ref count:", sys.getrefcount(x))\n# Cyclic GC control:\ngc.collect() # Trigger manual collection',
          howItWorks: [
            'PyObject header maintains ob_refcnt; PyGC_Head doubly-linked lists track trackable containers.',
          ],
          examples: [
            {
              title: 'Circular Reference Demonstration and GC Scan',
              code:
                'import gc\n\nclass Node:\n    def __init__(self, val):\n        self.val = val\n        self.neighbor = None\n\na = Node(1)\nb = Node(2)\na.neighbor = b\nb.neighbor = a # Circular reference created!\n\ndel a\ndel b # Ref counts > 0 due to circular cycle; cyclic GC must recover them\nunreachable = gc.collect()\nprint("Cyclic objects collected by GC:", unreachable)',
              explanation:
                'Demonstrates how CPython cyclic GC cleans up circular references.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Overriding __del__ in cyclic structures in older Python versions, preventing garbage collection.',
              explanation:
                'Modern Python (PEP 442) handles __del__ in cycles, but weakref is still preferable.',
            },
          ],
          quickChecks: [
            {
              question:
                'What is the primary memory management mechanism in CPython?',
              answer: 'Reference counting',
              options: [
                'Tracing sweep only',
                'Reference counting',
                'Manual malloc/free',
                'JVM garbage collection',
              ],
              correctAnswer: 1,
              explanation:
                'Reference counting deallocates memory immediately when count reaches zero.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Use the tracemalloc module to profile memory allocation before and after creating 100,000 objects',
              difficulty: 'advanced',
              concepts: ['gc', 'tracemalloc', 'reference counting'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 25,
        },
      ],
    },

    // =============================================================
    // MODULE 18: CONCURRENCY & ASYNCHRONOUS PROGRAMMING
    // =============================================================
    {
      id: 'python-mod-concurrency-async',
      title: 'Concurrency & Asynchronous Programming',
      order: 18,
      description:
        'The Global Interpreter Lock (GIL), multi-threading, multi-processing, and asyncio event-driven programming.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 18.1: GIL AND THREADING
        // ---------------------------------------------------------
        {
          id: 'python-gil-and-threading',
          title: 'The GIL and Multi-Threading',
          slug: 'gil-and-threading',
          description:
            'Understanding the Global Interpreter Lock, threads for I/O-bound tasks, Locks, and synchronization.',
          learningObjectives: [
            'Explain the Global Interpreter Lock (GIL).',
            'Identify when threading helps (I/O-bound) vs hurts (CPU-bound).',
            'Synchronize threads using threading.Lock and ThreadPoolExecutor.',
          ],
          prerequisites: ['python-intermediate'],
          conceptSummary:
            'The GIL ensures only one native thread executes Python bytecode at once. Threads provide concurrency for I/O, not CPU parallelism.',
          detailedExplanation:
            "Because CPython's memory management is not thread-safe, the GIL restricts execution to a single thread at any given microsecond. However, during network, disk, or system calls, the GIL is released. Therefore, threading is ideal for concurrent I/O operations (fetching 50 web pages simultaneously).",
          syntaxExplanation:
            'import threading\nfrom concurrent.futures import ThreadPoolExecutor\n\nlock = threading.Lock()\nwith lock:\n    # Thread-safe critical section\n    pass',
          howItWorks: [
            'Operating system threads schedule on CPU cores, but acquire the CPython interpreter mutex before executing bytecode.',
          ],
          examples: [
            {
              title: 'Concurrent I/O Downloads with ThreadPoolExecutor',
              code:
                'from concurrent.futures import ThreadPoolExecutor\nimport time\n\ndef simulate_io_download(site_id):\n    time.sleep(0.5) # Simulates network I/O\n    return f"Site {site_id} downloaded"\n\nwith ThreadPoolExecutor(max_workers=5) as executor:\n    results = list(executor.map(simulate_io_download, range(5)))\n\nprint("Downloaded results count:", len(results))',
              explanation:
                'Executes I/O operations concurrently in separate threads.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using threading to speed up heavy mathematical calculations in Python.',
              explanation:
                'CPU-bound tasks run slower on multiple threads due to GIL lock contention. Use multiprocessing for CPU tasks.',
            },
          ],
          quickChecks: [
            {
              question:
                'For what type of workloads is Python threading most beneficial?',
              answer: 'I/O-bound workloads (network, disk, database)',
              options: [
                'CPU-intensive math',
                'I/O-bound workloads (network, disk, database)',
                'Cryptographic mining',
                'Rendering 3D models',
              ],
              correctAnswer: 1,
              explanation:
                'The GIL is released during I/O operations, making threading effective for I/O concurrency.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a thread-safe counter class using threading.Lock',
              difficulty: 'advanced',
              concepts: ['threading', 'Lock'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 18.2: MULTIPROCESSING
        // ---------------------------------------------------------
        {
          id: 'python-multiprocessing',
          title: 'True Parallelism with Multiprocessing',
          slug: 'multiprocessing',
          description:
            'Bypassing the GIL for CPU-bound tasks using separate processes, ProcessPoolExecutor, and Queues.',
          learningObjectives: [
            'Bypass the GIL to achieve true multi-core CPU parallelism.',
            'Use ProcessPoolExecutor for data parallel jobs.',
            'Pass data between processes using multiprocessing.Queue.',
          ],
          prerequisites: ['python-gil-and-threading'],
          conceptSummary:
            '`multiprocessing` spawns distinct Python processes each with its own interpreter and memory space, achieving 100% CPU utilization.',
          detailedExplanation:
            'To perform heavy mathematical computation across multiple CPU cores, you must bypass the GIL by creating independent processes. Each process has its own GIL. Communication occurs via inter-process communication (IPC) and pickle serialization.',
          syntaxExplanation:
            'from concurrent.futures import ProcessPoolExecutor\nimport os\n\ndef cpu_work(n):\n    return sum(i * i for i in range(n))\n\n# with ProcessPoolExecutor() as pool:\n#     results = list(pool.map(cpu_work, [1000000, 2000000]))',
          howItWorks: [
            'Spawns OS processes (via fork or spawn), serializes parameters with pickle, and coordinates results through pipes.',
          ],
          examples: [
            {
              title: 'CPU-Bound Benchmark Architecture',
              code:
                'from concurrent.futures import ProcessPoolExecutor\n\ndef factorize(n):\n    # Heavy CPU calculation\n    factors = []\n    for i in range(1, int(n**0.5) + 1):\n        if n % i == 0:\n            factors.append(i)\n    return len(factors)\n\n# Must be guarded under if __name__ == "__main__":\n# with ProcessPoolExecutor() as executor:\n#     results = list(executor.map(factorize, [9999999, 8888888]))',
              explanation:
                'Distributes computation evenly across available CPU cores.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Omitting if __name__ == "__main__": on Windows when using multiprocessing.',
              explanation:
                'Causes an infinite recursive process spawning bomb (RuntimeError).',
            },
          ],
          quickChecks: [
            {
              question:
                'Why does multiprocessing achieve true CPU parallelism while threading does not in CPython?',
              answer:
                'Each process runs its own independent Python interpreter and GIL',
              options: [
                'It uses C++ threads',
                'Each process runs its own independent Python interpreter and GIL',
                'It disables garbage collection',
                'It bypasses the operating system',
              ],
              correctAnswer: 1,
              explanation:
                'Multiple processes have separate memory spaces and separate GIL instances.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Implement a parallel prime number checker using ProcessPoolExecutor',
              difficulty: 'advanced',
              concepts: ['multiprocessing', 'ProcessPoolExecutor'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 18.3: ASYNCIO EVENT LOOP
        // ---------------------------------------------------------
        {
          id: 'python-asyncio-event-loop',
          title: 'Asynchronous Programming with asyncio',
          slug: 'asyncio-event-loop',
          description:
            'Single-threaded cooperative multitasking using async, await, Tasks, and asyncio.gather.',
          learningObjectives: [
            'Understand the event loop architecture.',
            'Define coroutines with async def and await.',
            'Execute concurrent tasks with asyncio.gather.',
            'Manage cancellation and timeouts.',
          ],
          prerequisites: ['python-gil-and-threading'],
          conceptSummary:
            '`asyncio` executes concurrent I/O on a single thread using an event loop and cooperative coroutine switching (`async/await`).',
          detailedExplanation:
            'Unlike threads which are preemptively scheduled by the operating system (incurring context-switch overhead), coroutines yield control cooperatively whenever they hit an `await` on an I/O operation. A single thread can manage tens of thousands of active socket connections effortlessly.',
          syntaxExplanation:
            'import asyncio\n\nasync def fetch_data(item_id):\n    await asyncio.sleep(1) # Non-blocking I/O simulation\n    return f"Data {item_id}"\n\nasync def main():\n    results = await asyncio.gather(\n        fetch_data(1),\n        fetch_data(2)\n    )\n    print(results)\n\n# asyncio.run(main())',
          howItWorks: [
            'The event loop monitors socket file descriptors using OS polling (epoll/kqueue/IOCP).',
          ],
          examples: [
            {
              title: 'Concurrent API Simulation with asyncio.gather',
              code:
                'import asyncio\n\nasync def query_service(name, delay):\n    print(f"[{name}] Request dispatched...")\n    await asyncio.sleep(delay)\n    print(f"[{name}] Response received.")\n    return f"{name}: SUCCESS"\n\nasync def main():\n    results = await asyncio.gather(\n        query_service("PaymentGateway", 0.3),\n        query_service("InventoryService", 0.2),\n        query_service("UserDb", 0.1)\n    )\n    print("All services responded:", results)\n\n# asyncio.run(main())',
              explanation:
                'Fetches responses from multiple services concurrently without threads.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Calling blocking functions (like time.sleep or requests.get) inside an async function.',
              explanation:
                'Blocks the entire event loop for all coroutines! Use asyncio.sleep or httpx/aiohttp.',
            },
          ],
          quickChecks: [
            {
              question:
                'What keyword defines an asynchronous coroutine function in modern Python?',
              answer: 'async def',
              options: [
                'def async',
                'async def',
                'coroutine def',
                'thread def',
              ],
              correctAnswer: 1,
              explanation:
                'async def defines a native coroutine function.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write an asynchronous worker that downloads 5 simulated endpoints with asyncio.wait_for timeout guards',
              difficulty: 'advanced',
              concepts: ['asyncio', 'async/await', 'asyncio.gather'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 30,
        },
      ],
    },

    // =============================================================
    // MODULE 19: NETWORKING, APIS & DATABASE SYSTEMS
    // =============================================================
    {
      id: 'python-mod-networking-databases',
      title: 'Networking, APIs & Database Systems',
      order: 19,
      description:
        'Raw sockets, building and consuming REST APIs, SQLite with parameterized queries, and ORM architecture.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 19.1: SOCKET PROGRAMMING
        // ---------------------------------------------------------
        {
          id: 'python-socket-programming',
          title: 'Network Socket Programming',
          slug: 'socket-programming',
          description:
            "TCP/IP communication at the transport layer using Python's socket module.",
          learningObjectives: [
            'Create TCP server and client sockets.',
            'Understand bind, listen, accept, send, and recv.',
            'Handle TCP stream framing and buffering.',
          ],
          prerequisites: ['python-intermediate'],
          conceptSummary:
            'The `socket` module provides low-level network communication interfaces adhering to the Berkeley sockets API.',
          detailedExplanation:
            'Sockets represent network endpoints. A TCP server creates a socket, binds it to an IP and port, listens for incoming connections, and calls `accept()` to establish a duplex communication channel. Understanding sockets reveals how HTTP servers and web frameworks operate underneath.',
          syntaxExplanation:
            'import socket\nserver = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nserver.bind(("127.0.0.1", 9000))\nserver.listen(5)',
          howItWorks: [
            'Maps directly to OS kernel system calls (socket, bind, listen, accept, read, write).',
          ],
          examples: [
            {
              title: 'Simple Echo Client Blueprint',
              code:
                'import socket\ndef send_echo_message(host, port, message):\n    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:\n        s.connect((host, port))\n        s.sendall(message.encode("utf-8"))\n        data = s.recv(1024)\n    return data.decode("utf-8")',
              explanation:
                'Connects to a TCP server, transmits bytes, and reads response.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Sending strings directly over sockets without encoding to bytes.',
              explanation:
                'Sockets transmit raw byte streams; call .encode("utf-8") before sending and .decode("utf-8") after receiving.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does socket.SOCK_STREAM specify when creating a socket?',
              answer: 'TCP (Transmission Control Protocol)',
              options: [
                'UDP (User Datagram Protocol)',
                'TCP (Transmission Control Protocol)',
                'Raw ICMP',
                'Bluetooth',
              ],
              correctAnswer: 1,
              explanation:
                'SOCK_STREAM specifies a reliable, two-way, connection-based byte stream (TCP).',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a basic single-client TCP echo server that repeats back received text in uppercase',
              difficulty: 'advanced',
              concepts: ['socket', 'TCP'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 19.2: REST APIS AND HTTP
        // ---------------------------------------------------------
        {
          id: 'python-rest-apis-and-http',
          title: 'REST APIs and HTTP Architecture',
          slug: 'rest-apis-and-http',
          description:
            'HTTP methods, status codes, JSON contracts, and consuming/building production REST services.',
          learningObjectives: [
            'Understand HTTP methods (GET, POST, PUT, DELETE, PATCH).',
            'Parse and validate JSON request and response payloads.',
            'Implement proper HTTP error status codes (200, 201, 400, 404, 500).',
          ],
          prerequisites: ['python-json-csv-handling'],
          conceptSummary:
            'REST APIs use standard HTTP verbs and status codes to exchange JSON resources between client and server.',
          detailedExplanation:
            'REST (Representational State Transfer) is the architectural foundation of the modern web. In Python, modern APIs are constructed using frameworks like FastAPI or Flask, enforcing strict input schema validation and returning predictable JSON responses.',
          syntaxExplanation:
            '# API Endpoint pattern:\n# GET /api/v1/users/42 -> Returns user record\n# POST /api/v1/users   -> Creates user and returns HTTP 201 Created',
          howItWorks: [
            'HTTP requests arrive over TCP sockets; the WSGI/ASGI application parses headers and body.',
          ],
          examples: [
            {
              title: 'REST Client Query Pattern',
              code:
                'import json\n# Pattern for consuming a REST endpoint:\n# import urllib.request\n# req = urllib.request.Request("https://api.example.com/v1/status", headers={"User-Agent": "PyClient"})\n# with urllib.request.urlopen(req) as resp:\n#     data = json.loads(resp.read().decode())',
              explanation:
                'Demonstrates standard REST request dispatching.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Returning HTTP 200 OK when an internal database error or validation error occurred.',
              explanation:
                'Always return appropriate 4xx client errors or 5xx server error status codes.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which HTTP status code should be returned after successfully creating a new resource via POST?',
              answer: '201 Created',
              options: [
                '200 OK',
                '201 Created',
                '204 No Content',
                '301 Moved',
              ],
              correctAnswer: 1,
              explanation:
                '201 Created is the canonical HTTP status for successful resource creation.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Design a REST resource schema for an e-commerce order with statuses and line items',
              difficulty: 'advanced',
              concepts: ['REST', 'HTTP'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 19.3: DATABASE SQLITE3
        // ---------------------------------------------------------
        {
          id: 'python-database-sqlite3',
          title: 'Database Programming with sqlite3',
          slug: 'database-sqlite3',
          description:
            'Relational data modeling, connection lifecycles, cursors, transactions, and preventing SQL injection.',
          learningObjectives: [
            'Connect to SQLite databases with the built-in sqlite3 module.',
            'Execute queries and fetch results with cursors.',
            'Prevent SQL injection using parameterized queries (?, not string formatting).',
            'Manage transactions with commit and rollback.',
          ],
          prerequisites: ['python-intermediate'],
          conceptSummary:
            "Python's standard `sqlite3` module provides an embedded serverless relational database engine compliant with the DB-API 2.0 specification.",
          detailedExplanation:
            'SQLite stores complete relational databases in a single local file with zero configuration. Crucial rule: NEVER format SQL queries using f-strings or `%s`, as this exposes applications to catastrophic SQL injection attacks. Always use placeholder tuples (`?`).',
          syntaxExplanation:
            'import sqlite3\nconn = sqlite3.connect("app.db")\ncursor = conn.cursor()\ncursor.execute("SELECT * FROM users WHERE email = ?", (user_email,))\nrows = cursor.fetchall()\nconn.close()',
          howItWorks: [
            'C library libsqlite3 compiles SQL into VDBE (Virtual Database Engine) bytecode and manages B-Tree pages.',
          ],
          examples: [
            {
              title: 'Parameterized CRUD Workflow with Transactions',
              code:
                'import sqlite3\n\nwith sqlite3.connect(":memory:") as conn:\n    cursor = conn.cursor()\n    cursor.execute("""\n        CREATE TABLE accounts (\n            id INTEGER PRIMARY KEY,\n            username TEXT UNIQUE,\n            balance REAL\n        )\n    """)\n    # Parameterized insert (Safe from SQL injection!)\n    cursor.execute("INSERT INTO accounts (username, balance) VALUES (?, ?)", ("Dana", 1250.0))\n    cursor.execute("SELECT username, balance FROM accounts WHERE balance > ?", (1000.0,))\n    record = cursor.fetchone()\n    print("Retrieved account:", record)',
              explanation:
                'Demonstrates in-memory SQLite transactions and parameterized query execution.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using f"SELECT * FROM users WHERE name = \'{user_input}\'" which allows SQL Injection.',
              explanation:
                'Catastrophic security vulnerability. Always pass parameters as tuples: ("SELECT ... WHERE name = ?", (user_input,)).',
            },
          ],
          quickChecks: [
            {
              question:
                'How should dynamic variables be inserted into SQL queries to prevent SQL injection?',
              answer:
                'Using parameterized query placeholders (?, %s) passed in an argument tuple',
              options: [
                'Using string concatenation (+)',
                'Using f-strings',
                'Using parameterized query placeholders (?, %s) passed in an argument tuple',
                'Using base64 encoding',
              ],
              correctAnswer: 2,
              explanation:
                'Parameterized queries ensure the database driver treats user input strictly as data, never executable SQL.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create an SQLite table for tracking student test scores and query the class average using SQL AVG()',
              difficulty: 'advanced',
              concepts: ['sqlite3', 'parameterized queries'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 25,
        },
      ],
    },

    // =============================================================
    // MODULE 20: PERFORMANCE, PACKAGING & ARCHITECTURE
    // =============================================================
    {
      id: 'python-mod-performance-packaging',
      title: 'Performance, Packaging & Architecture',
      order: 20,
      description:
        'Profiling code, memory optimization with __slots__, modern pyproject.toml packaging, and enterprise design patterns.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 20.1: PROFILING AND OPTIMIZATION
        // ---------------------------------------------------------
        {
          id: 'python-profiling-and-optimization',
          title: 'Profiling and Performance Optimization',
          slug: 'profiling-and-optimization',
          description:
            'Identifying bottlenecks with cProfile, timeit, and memory optimization with __slots__.',
          learningObjectives: [
            'Measure bottlenecks with cProfile and pstats.',
            'Benchmark functions accurately with timeit.',
            'Reduce memory footprint by 60%+ using __slots__.',
          ],
          prerequisites: ['python-intermediate'],
          conceptSummary:
            '"Premature optimization is the root of all evil" — profile first with `cProfile`, then optimize data structures and algorithms.',
          detailedExplanation:
            'Before rewriting code in C or adding caching, you must profile to find where time is actually spent. `cProfile` provides deterministic function-level call counts and durations. When instantiating millions of small objects, declaring `__slots__` eliminates each instance\'s `__dict__` hash table, saving over 60% memory.',
          syntaxExplanation:
            'import cProfile, pstats\n# cProfile.run("expensive_function()")\n\nclass OptimizedPoint:\n    __slots__ = ("x", "y") # Prevents __dict__ allocation\n    def __init__(self, x, y):\n        self.x, self.y = x, y',
          howItWorks: [
            '__slots__ reserves fixed C struct descriptor slots directly on the PyObject instead of allocating dynamic dicts.',
          ],
          examples: [
            {
              title: 'Benchmarking Execution Time with timeit',
              code:
                'import timeit\nlist_comp_time = timeit.timeit("[x * 2 for x in range(1000)]", number=10000)\nmap_time = timeit.timeit("list(map(lambda x: x * 2, range(1000)))", number=10000)\nprint(f"List comp: {list_comp_time:.4f}s vs Map: {map_time:.4f}s")',
              explanation:
                'Compares execution speeds across 10,000 iterations.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Optimizing non-critical code without profiling.',
              explanation:
                'Always profile with cProfile before optimizing to ensure you are targeting real bottlenecks.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does defining __slots__ in a Python class accomplish?',
              answer:
                'Eliminates per-instance __dict__, reducing memory footprint dramatically',
              options: [
                'Makes the class private',
                'Eliminates per-instance __dict__, reducing memory footprint dramatically',
                'Enforces type hints at runtime',
                'Enables multi-threading',
              ],
              correctAnswer: 1,
              explanation:
                '__slots__ prevents creating instance dictionaries, drastically cutting memory usage.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Benchmark the memory footprint of 100,000 objects with and without __slots__',
              difficulty: 'advanced',
              concepts: ['__slots__', 'cProfile', 'sys.getsizeof'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 20.2: PACKAGING AND DISTRIBUTION
        // ---------------------------------------------------------
        {
          id: 'python-packaging-distribution',
          title: 'Packaging and Distribution (pyproject.toml)',
          slug: 'packaging-distribution',
          description:
            'Building modern distributable Python wheels and PyPI packages using pyproject.toml and hatch/flit/setuptools.',
          learningObjectives: [
            'Configure modern Python projects using pyproject.toml (PEP 518/621).',
            'Understand wheel binaries (.whl) vs source distributions (sdist).',
            'Package CLI applications with entry-points.',
          ],
          prerequisites: ['python-mod-modules-packages'],
          conceptSummary:
            'Modern Python packaging uses `pyproject.toml` as the single configuration standard to build standard distribution wheels.',
          detailedExplanation:
            'Legacy Python relied on `setup.py`. Modern packaging uses declarative `pyproject.toml` files adhering to PEP 621. Tools like `build` (`python -m build`) read `pyproject.toml` to create pre-compiled `.whl` and `.tar.gz` distribution packages publishable to PyPI.',
          syntaxExplanation:
            '# Sample pyproject.toml:\n# [project]\n# name = "my-library"\n# version = "0.1.0"\n# dependencies = ["requests>=2.31"]\n# [project.scripts]\n# my-cli = "my_library.cli:main"',
          howItWorks: [
            'Build backend (e.g. setuptools or flit) packages source files and metadata into zip-based wheel archives.',
          ],
          examples: [
            {
              title: 'Modern pyproject.toml Definition',
              code:
                '# [build-system]\n# requires = ["setuptools>=61.0"]\n# build-backend = "setuptools.build_meta"\n#\n# [project]\n# name = "datasieve"\n# version = "1.0.0"\n# authors = [{name = "Dev Team", email = "dev@example.com"}]\n# description = "High-throughput data filtering pipeline"',
              explanation: 'Standard declarative package configuration.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Continuing to create new projects with legacy setup.py and setup.cfg files.',
              explanation:
                'pyproject.toml is the official unified standard for all modern Python tooling.',
            },
          ],
          quickChecks: [
            {
              question:
                'What file is the modern unified standard for Python project metadata and packaging configuration?',
              answer: 'pyproject.toml',
              options: [
                'setup.py',
                'pyproject.toml',
                'package.json',
                'Pipfile',
              ],
              correctAnswer: 1,
              explanation:
                'pyproject.toml (PEP 518/621) is the modern Python packaging standard.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a complete pyproject.toml file for a command line utility including dependencies and CLI entry point',
              difficulty: 'advanced',
              concepts: ['pyproject.toml', 'packaging'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 20.3: APPLICATION ARCHITECTURE
        // ---------------------------------------------------------
        {
          id: 'python-application-architecture',
          title: 'Production Architecture and Design Patterns',
          slug: 'application-architecture',
          description:
            'Enterprise design patterns: Factory, Singleton, Observer, Dependency Injection, and Clean Architecture.',
          learningObjectives: [
            'Implement classical Gang of Four (GoF) patterns in idiomatic Python.',
            'Apply Dependency Injection to decouple business logic from infrastructure.',
            'Structure production applications following Clean/Hexagonal Architecture.',
          ],
          prerequisites: ['python-advanced-oop'],
          conceptSummary:
            'Production Python architecture emphasizes loose coupling, dependency injection, and clean architectural boundaries.',
          detailedExplanation:
            'As applications scale to thousands of lines, coupling business rules directly to databases or web frameworks leads to fragile code. Following Clean Architecture—where domain models reside at the core and database/HTTP adapters live on the outer periphery—ensures maintainability, testability, and longevity.',
          syntaxExplanation:
            '# Dependency Injection pattern:\nclass UserService:\n    def __init__(self, user_repo, mailer):\n        self.user_repo = user_repo\n        self.mailer = mailer',
          howItWorks: [
            'Decouples components through abstract interfaces, enabling trivial mocking in unit tests.',
          ],
          examples: [
            {
              title: 'Dependency Injection in Application Architecture',
              code:
                'class MockEmailSender:\n    def send(self, to, body):\n        print(f"[TEST EMAIL] To: {to}, Msg: {body}")\n\nclass RegistrationService:\n    def __init__(self, email_service):\n        self.email_service = email_service\n    def register_user(self, email):\n        # Business logic here\n        self.email_service.send(email, "Welcome to the Platform!")\n\n# Swapping production sender for mock sender in tests is seamless:\nservice = RegistrationService(MockEmailSender())\nservice.register_user("alex@example.com")',
              explanation:
                'Inversion of Control enables robust, isolated testing.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Instantiating database connections and HTTP clients directly inside business logic classes.',
              explanation:
                'Violates Dependency Inversion principle. Pass clients in via __init__ (Dependency Injection).',
            },
          ],
          quickChecks: [
            {
              question:
                'What is the main benefit of Dependency Injection in software architecture?',
              answer:
                'Decouples components, making code modular, testable, and maintainable',
              options: [
                'Makes code run 10x faster',
                'Decouples components, making code modular, testable, and maintainable',
                'Eliminates the need for classes',
                'Enables automatic multithreading',
              ],
              correctAnswer: 1,
              explanation:
                'Dependency injection promotes loose coupling and simplifies unit testing.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Refactor a tightly-coupled reporting script into Clean Architecture with an abstract DataProvider interface',
              difficulty: 'advanced',
              concepts: ['dependency injection', 'clean architecture'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 30,
        },
      ],
    },
  ],
};

export default pythonAdvanced;