/**
 * Central Curriculum Registry
 * Maps language slugs to their curriculum data files.
 * Provides unified accessors for modules, topics, and stats.
 *
 * Place this file at: client/src/curricula/index.js
 */

// -------- JAVA --------
import javaBeginner from '../../../server/curriculum/java/beginner.js';
import javaIntermediate from '../../../server/curriculum/java/intermediate.js';
import javaAdvanced from '../../../server/curriculum/java/advanced.js';

// -------- PYTHON --------
import pythonBeginner from '../../../server/curriculum/python/beginner.js';
import pythonIntermediate from '../../../server/curriculum/python/intermediate.js';
import pythonAdvanced from '../../../server/curriculum/python/advanced.js';

// -------- JAVASCRIPT --------
import javascriptBeginner from '../../../server/curriculum/javascript/beginner.js';
import javascriptIntermediate from '../../../server/curriculum/javascript/intermediate.js';
import javascriptAdvanced from '../../../server/curriculum/javascript/advanced.js';

// -------- C++ --------
import cppBeginner from '../../../server/curriculum/cpp/beginner.js';
import cppIntermediate from '../../../server/curriculum/cpp/intermediate.js';
import cppAdvanced from '../../../server/curriculum/cpp/advanced.js';

// -------- C --------
import cBeginner from '../../../server/curriculum/c/beginner.js';
import cIntermediate from '../../../server/curriculum/c/intermediate.js';
import cAdvanced from '../../../server/curriculum/c/advanced.js';

export const CURRICULA = {
    python: {
        id: 'python',
        name: 'Python',
        icon: '🐍',
        color: '#3776ab',
        gradient: 'from-blue-500 via-yellow-400 to-blue-600',
        tagline: 'Readable, versatile, batteries-included',
        description: 'Master Python from fundamentals to advanced systems with collections, async, and CPython internals.',
        version: 'Python 3.12',
        levels: [pythonBeginner, pythonIntermediate, pythonAdvanced],
    },
    javascript: {
        id: 'javascript',
        name: 'JavaScript',
        icon: '⚡',
        color: '#f7df1e',
        gradient: 'from-yellow-400 via-amber-500 to-orange-500',
        tagline: "The web's native language",
        description: 'From ES6+ syntax to event loops, async patterns, and full-stack Node.js.',
        version: 'ES2024',
        levels: [javascriptBeginner, javascriptIntermediate, javascriptAdvanced],
    },
    java: {
        id: 'java',
        name: 'Java',
        icon: '☕',
        color: '#f89820',
        gradient: 'from-orange-500 via-red-500 to-rose-600',
        tagline: 'Enterprise-grade JVM language',
        description: 'OOP mastery, collections, streams, concurrency, and Spring Boot architecture.',
        version: 'JDK 21',
        levels: [javaBeginner, javaIntermediate, javaAdvanced],
    },
    cpp: {
        id: 'cpp',
        name: 'C++',
        icon: '⚙️',
        color: '#00599c',
        gradient: 'from-blue-600 via-cyan-500 to-blue-800',
        tagline: 'Zero-overhead systems programming',
        description: 'RAII, templates, STL, move semantics, smart pointers, and modern concurrency.',
        version: 'C++20',
        levels: [cppBeginner, cppIntermediate, cppAdvanced],
    },
    c: {
        id: 'c',
        name: 'C',
        icon: '🔧',
        color: '#a8b9cc',
        gradient: 'from-slate-500 via-slate-600 to-slate-800',
        tagline: 'The mother of modern languages',
        description: 'Pointers, memory, structs, preprocessor, and low-level systems programming.',
        version: 'C17',
        levels: [cBeginner, cIntermediate, cAdvanced],
    },
};

export const LANGUAGE_LIST = Object.values(CURRICULA);

export function getCurriculum(slug) {
    return CURRICULA[slug] || null;
}

export function getAllModules(langSlug) {
    const curriculum = getCurriculum(langSlug);
    if (!curriculum) return [];
    return curriculum.levels.flatMap((level) =>
        (level.modules || []).map((m) => ({
            ...m,
            level: level.level,
            levelTitle: level.title,
            levelDifficulty: level.difficulty,
        }))
    );
}

export function findTopic(langSlug, topicSlug) {
    const curriculum = getCurriculum(langSlug);
    if (!curriculum) return null;
    for (const level of curriculum.levels) {
        for (const module of level.modules || []) {
            for (const topic of module.topics || []) {
                if (topic.slug === topicSlug || topic.id === topicSlug) {
                    return { level, module, topic, curriculum };
                }
            }
        }
    }
    return null;
}

export function findModule(langSlug, moduleId) {
    const curriculum = getCurriculum(langSlug);
    if (!curriculum) return null;
    for (const level of curriculum.levels) {
        for (const module of level.modules || []) {
            if (module.id === moduleId) {
                return { level, module, curriculum };
            }
        }
    }
    return null;
}

export function getCurriculumStats(langSlug) {
    const curriculum = getCurriculum(langSlug);
    if (!curriculum) return { modules: 0, topics: 0 };
    let modules = 0;
    let topics = 0;
    for (const level of curriculum.levels) {
        for (const module of level.modules || []) {
            modules += 1;
            topics += (module.topics || []).length;
        }
    }
    return { modules, topics };
}

// Flat search across all curricula
export function searchTopics(query) {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    const results = [];
    for (const curriculum of LANGUAGE_LIST) {
        for (const level of curriculum.levels) {
            for (const module of level.modules || []) {
                for (const topic of module.topics || []) {
                    if (
                        topic.title?.toLowerCase().includes(q) ||
                        topic.description?.toLowerCase().includes(q)
                    ) {
                        results.push({
                            curriculum,
                            level,
                            module,
                            topic,
                        });
                    }
                }
            }
        }
    }
    return results.slice(0, 20);
}