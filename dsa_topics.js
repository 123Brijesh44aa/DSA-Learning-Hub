// Topics data - Add your new topics here
// Each topic should have a corresponding HTML file in your project folder
const topics = [
    {
        "title": "Two Pointers Approach - Core Concept and Applications",
        "description": "Explore the fundamental Two Pointers technique in Data Structures and Algorithms, covering its various patterns (inward, unidirectional, fast/slow) and common applications like finding pairs, removing duplicates, and cycle detection.",
        "difficulty": "easy",
        "date": "2025-07-25",
        "completed": true,
        "filename": "problems\\two_pointers_detail.html",
        "icon": " ",
        "tags": ["algorithms", "arrays", "linked-lists", "optimization", "2 pointers"],
        "contributorName": "Brijesh Mourya",
        "contributorGithub": "123Brijesh44aa",
        "owner": true
    },

    {
        "title": "2 Sum Problem",
        "description": "Solve the classic 2 Sum Problem using hash maps and two-pointer techniques. Learn how to find two numbers in an array that add up to a target value efficiently.",
        "difficulty": "easy",
        "date": "2025-07-25",
        "completed": true,
        "filename": "problems\\two-sum-dsa-page.html",
        "icon": " ",
        "tags": ["algorithms", "arrays", "hashmap", "two-pointers"],
        "contributorName": "Brijesh Mourya",
        "contributorGithub": "123Brijesh44aa",
        "owner": true
    },

    {
        "title": "Kadane's Algorithm",
        "description": "Master Kadane's Algorithm to find the maximum subarray sum in an array of integers, including negative numbers, with optimal O(n) time complexity using dynamic programming.",
        "difficulty": "medium",
        "date": "2025-07-26",
        "completed": true,
        "filename": "problems\\kadnes_algorithm.html",
        "icon": " ",
        "tags": ["algorithms", "arrays", "dynamic-programming"],
        "contributorName": "Brijesh Mourya",
        "contributorGithub": "123Brijesh44aa",
        "owner": true
    },

    {
        "title": "Binary Search Algorithm",
        "description": "Learn the Binary Search Algorithm to efficiently find an element in a sorted array. Understand how it reduces the search space by half in each step, achieving O(log n) time complexity.",
        "difficulty": "easy",
        "date": "2025-07-26",
        "completed": false,
        "filename": "problems\\binary_search.html",
        "icon": " ",
        "tags": ["algorithms", "searching", "sorted arrays", "divide and conquer"],
        "contributorName": "Brijesh Mourya",
        "contributorGithub": "123Brijesh44aa",
        "owner": true
    },

    {
        "title": "String Builder and String Buffer in Java",
        "description": "Explore Java's StringBuilder and StringBuffer classes, understanding their mutability, how they optimize string manipulations compared to immutable Strings, their memory implications, and crucial differences in thread-safety and performance.",
        "difficulty": "medium",
        "date": "2025-07-29",
        "completed": true,
        "filename": "problems\\stringBuffer_stringBuilder.html",
        "icon": " ",
        "tags": ["Java", "String", "StringBuilder", "StringBuffer", "mutability", "thread-safety", "performance", "memory", "core Java"],
        "contributorName": "Brijesh Mourya",
        "contributorGithub": "123Brijesh44aa",
        "owner": true
    },

    {
        "title": "Remove All Occurrences of a Key in Singly Linked List",
        "description": "Master the technique of removing all nodes with a specific value from a singly linked list using the two-pointer approach. Learn how to handle edge cases like removing leading nodes, managing memory in different languages, and understanding the algorithm's O(n) time complexity with O(1) space efficiency.",
        "difficulty": "medium",
        "date": "2025-08-18",
        "completed": true,
        "filename": "problems\\linked_list_removal_diagram.html",
        "icon": "🔗",
        "tags": [
            "Linked List",
            "Two Pointers",
            "Data Structures",
            "Algorithm",
            "Java",
            "C++",
            "Python",
            "JavaScript",
            "Kotlin",
            "Go",
            "Rust",
            "Memory Management",
            "Edge Cases",
            "LeetCode",
            "Interview Prep"
        ],
        "contributorName": "Brijesh Mourya",
        "contributorGithub": "123Brijesh44aa",
        "owner": true,
    },

    {
        "title": "Java Assignment 1",
        "description": "Java Assignment 1",
        "difficulty": "Easy",
        "date": "2025-11-13",
        "completed": true,
        "filename": "problems\\java_assignment_1.html",
        "icon": " ",
        "tags": ["Java", "Inheritance","Abstraction","Encapsulation","Polymorphism"],
        "contributorName": "Anonymous",
        "contributorGithub": "anonymous",
        "owner": true
    },

    {
        "title": "Java OOPS Lab Coding Question(11)",
        "description": "Java OOPs Lab Coding Questions",
        "difficulty": "Easy",
        "date": "2025-11-13",
        "completed": true,
        "filename": "problems\\java_coding_questions_oops_lab.html",
        "icon": " ",
        "tags": ["Java"],
        "contributorName": "Anonymous",
        "contributorGithub": "anonymous",
        "owner": true
    },

    {
        "title": "Merge Sort Algorithm",
        "description": "Merge Sort is a powerful and efficient sorting algorithm based on the Divide and Conquer paradigm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.",
        "difficulty": "medium",
        "date": "2025-11-14",
        "completed": true,
        "filename": "problems/merge_sort.html",
        "icon": " ",
        "tags": ["algorithms", "sorting", "divide and conquer", "recursion"],
        "contributorName": "Jules",
        "contributorGithub": "jules",
        "owner": true
    },

    {
        "title": "Breadth-First Search (BFS)",
        "description": "Breadth-First Search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root and explores the neighbor nodes first, before moving to the next level neighbors.",
        "difficulty": "medium",
        "date": "2025-11-14",
        "completed": true,
        "filename": "problems/bfs_graph.html",
        "icon": " ",
        "tags": ["algorithms", "graphs", "traversal", "search"],
        "contributorName": "Jules",
        "contributorGithub": "jules",
        "owner": true
    },

    {
        "title": "Spanning Tree & MST",
        "description": "Understand the concepts of Spanning Tree and Minimum Spanning Tree (MST). Learn their properties, applications in network design, and the difference between them.",
        "difficulty": "medium",
        "date": "2025-11-14",
        "completed": true,
        "filename": "problems/spanning_tree.html",
        "icon": " ",
        "tags": ["algorithms", "graphs", "mst", "spanning tree"],
        "contributorName": "Jules",
        "contributorGithub": "jules",
        "owner": true
    },

    {
        "title": "Kruskal's Algorithm",
        "description": "Master Kruskal's Algorithm for finding the Minimum Spanning Tree using a greedy approach and Disjoint Set Union (DSU).",
        "difficulty": "hard",
        "date": "2025-11-14",
        "completed": true,
        "filename": "problems/kruskals_algorithm.html",
        "icon": " ",
        "tags": ["algorithms", "graphs", "mst", "greedy", "kruskal", "dsu"],
        "contributorName": "Jules",
        "contributorGithub": "jules",
        "owner": true
    },

    {
        "title": "Prim's Algorithm",
        "description": "Learn Prim's Algorithm to find the Minimum Spanning Tree by growing the tree one vertex at a time using a greedy strategy.",
        "difficulty": "hard",
        "date": "2025-11-14",
        "completed": true,
        "filename": "problems/prims_algorithm.html",
        "icon": " ",
        "tags": ["algorithms", "graphs", "mst", "greedy", "prim"],
        "contributorName": "Jules",
        "contributorGithub": "jules",
        "owner": true
    }


];

// Export topics for use in other files (if using modules)
// export { topics };