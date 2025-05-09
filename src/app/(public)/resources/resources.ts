export type FileResource = {
  name: string
  href?: string
  type?: 'youtube' | 'article'
}

export type FolderResource = {
  name: string
  isFolder: true
  children: (FileResource | FolderResource)[]
}

type Resource = {
  name: string
  children: (FileResource | FolderResource)[]
}

export const RESOURCES: Resource[] = [
  {
    name: 'Bit Manipulation',
    children: [
      {
        name: 'Soon',
        type: 'article',
      },
    ],
  },
  {
    name: 'Tries',
    children: [
      {
        name: 'Soon',
        type: 'article',
      },
    ],
  },
  {
    name: 'DP',
    children: [
      {
        name: 'Soon',
        type: 'article',
      },
    ],
  },
  {
    name: 'Heap',
    children: [
      {
        name: 'Soon',
        type: 'article',
      },
    ],
  },
  {
    name: 'Graphs',
    children: [
      {
        name: 'Soon',
        type: 'article',
      },
    ],
  },
  {
    name: 'Matrix',
    children: [
      {
        name: 'Soon',
        type: 'article',
      },
    ],
  },
  {
    name: 'Trees',
    children: [
      {
        name: 'Soon',
        type: 'article',
      },
    ],
  },
  {
    name: 'Recursion',
    children: [
      {
        name: 'Videos',
        isFolder: true,
        children: [
          {
            name: 'FreeCodeCamp | Recursion in Programming',
            href: 'https://www.youtube.com/watch?v=IJDJ0kBx2LM&t=42s&pp=ygUScmVjdXJzaW9uIHR1dG9yaWFs',
            type: 'youtube',
          },
          {
            name: 'Abdulkariim | Dynamic Programming',
            href: 'https://www.youtube.com/playlist?list=PLmaO6hgzMGBqH7QF0HQbfMM86Uh522R9N',
            type: 'youtube',
          },
          {
            name: 'Recursion (Basics to Advanced)',
            href: 'https://www.youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9',
            type: 'youtube',
          },
        ],
      },
      {
        name: 'Articles',
        isFolder: true,
        children: [
          {
            name: 'FreeCodeCamp | Recursion is not hard',
            href: 'https://www.freecodecamp.org/news/recursion-is-not-hard-858a48830d83/',
            type: 'article',
          },
          {
            name: 'GeeksforGeeks | Linked List Data Structure',
            href: 'https://www.geeksforgeeks.org/introduction-to-recursion-2/',
            type: 'article',
          },
          {
            name: 'Recursion cheatsheet for coding interviews',
            href: 'https://www.techinterviewhandbook.org/algorithms/recursion/',
            type: 'article',
          },
        ],
      },
    ],
  },
  {
    name: 'Sorting & Searching',
    children: [
      {
        name: 'Soon',
        type: 'article',
      },
    ],
  },
  {
    name: 'Linked List',
    children: [
      {
        name: 'Videos',
        isFolder: true,
        children: [
          {
            name: 'Linked lists in 4 minutes',
            href: 'https://www.youtube.com/watch?v=F8AbOfQwl1c',
            type: 'youtube',
          },
          {
            name: 'Introduction to Linked List',
            href: 'https://www.youtube.com/watch?v=R9PTBwOzceo',
            type: 'youtube',
          },
        ],
      },
      {
        name: 'Articles',
        isFolder: true,
        children: [
          {
            name: 'Programiz | Linked list Data Structure',
            href: 'https://www.programiz.com/dsa/linked-list',
            type: 'article',
          },
          {
            name: 'Tutorialspoint | Linked List Data Structure',
            href: 'https://www.tutorialspoint.com/data_structures_algorithms/linked_list_algorithms.htm',
            type: 'article',
          },
          {
            name: 'Linked list cheatsheet for coding interviews',
            href: 'https://www.techinterviewhandbook.org/algorithms/linked-list/',
            type: 'article',
          },
        ],
      },
    ],
  },
  {
    name: 'Queue',
    children: [
      {
        name: 'Articles',
        isFolder: true,
        children: [
          {
            name: 'Programiz | Queue Data Structure',
            href: 'https://www.programiz.com/dsa/queue',
            type: 'article',
          },
          {
            name: 'GeeksforGeeks | Queue Data Structure',
            href: 'https://www.geeksforgeeks.org/queue-data-structure/',
            type: 'article',
          },
          {
            name: 'Tutorialspoint | Queue Data Structure',
            href: 'https://www.tutorialspoint.com/data_structures_algorithms/dsa_queue.htm',
            type: 'article',
          },
          {
            name: 'Tech Interview Handbook | Queue cheatsheet for coding interviews',
            href: 'https://www.techinterviewhandbook.org/algorithms/queue/',
            type: 'article',
          },
        ],
      },
      {
        name: 'Videos',
        isFolder: true,
        children: [
          {
            name: 'Queue in 3 minutes',
            href: 'https://www.youtube.com/watch?v=D6gu-_tmEpQ',
            type: 'youtube',
          },
          {
            name: 'Learn Queue data structures in 10 minutes',
            href: 'https://www.youtube.com/watch?v=nqXaPZi99JI',
            type: 'youtube',
          },
        ],
      },
    ],
  },
  {
    name: 'Stack',
    children: [
      {
        name: 'Articles',
        isFolder: true,
        children: [
          {
            name: 'Programiz | Stack Data Structure',
            href: 'https://www.programiz.com/dsa/stack',
            type: 'article',
          },
          {
            name: 'GeeksforGeeks | Stack Data Structure',
            href: 'https://www.geeksforgeeks.org/stack-data-structure/',
            type: 'article',
          },
          {
            name: 'Tutorialspoint | Stack Data Structure',
            href: 'https://www.tutorialspoint.com/data_structures_algorithms/stack_algorithm.htm',
            type: 'article',
          },
          {
            name: 'Tech Interview Handbook | Stack cheatsheet for coding interviews',
            href: 'https://www.techinterviewhandbook.org/algorithms/stack/',
            type: 'article',
          },
        ],
      },
      {
        name: 'Videos',
        isFolder: true,
        children: [
          {
            name: 'Introduction to Stacks',
            href: 'https://www.youtube.com/watch?v=I37kGX-nZEI&t=114s&pp=ygUFc3RhY2s%3D',
            type: 'youtube',
          },
          {
            name: 'Stacks in 3 minutes',
            href: 'https://www.youtube.com/watch?v=KcT3aVgrrpU',
            type: 'youtube',
          },
          {
            name: 'Learn Stack data structures in 10 minutes',
            href: 'https://www.youtube.com/watch?v=KInG04mAjO0',
            type: 'youtube',
          },
        ],
      },
    ],
  },
  {
    name: 'Sliding Window',
    children: [
      {
        name: 'Soon',
        type: 'article',
      },
    ],
  },
  {
    name: 'Two Pointers',
    children: [
      {
        name: 'Articles',
        isFolder: true,
        children: [
          {
            name: 'When should I use two pointer approach?',
            href: 'https://www.geeksforgeeks.org/when-should-i-use-two-pointer-approach',
            type: 'article',
          },
          {
            name: 'Two Pointers Technique',
            href: 'https://www.geeksforgeeks.org/two-pointers-technique/',
            type: 'article',
          },
        ],
      },
      {
        name: 'Videos',
        isFolder: true,
        children: [
          {
            name: 'Visual introduction Two Pointer Algorithm',
            href: 'https://www.youtube.com/watch?v=On03HWe2tZM',
            type: 'youtube',
          },
          {
            name: 'How to Use the Two Pointer Technique',
            href: 'https://www.youtube.com/watch?v=-gjxg6Pln50',
            type: 'youtube',
          },
        ],
      },
    ],
  },
  {
    name: 'Strings',
    children: [
      {
        name: 'Articles',
        isFolder: true,
        children: [
          {
            name: 'String in Data Structure',
            href: 'https://www.tutorialspoint.com/data_structures_algorithms/string_data_structure.htm',
            type: 'article',
          },
          {
            name: 'Introduction to Strings',
            href: 'https://www.geeksforgeeks.org/introduction-to-strings-data-structure-and-algorithm-tutorials/',
            type: 'article',
          },
          {
            name: 'String cheatsheet for coding interviews',
            href: 'https://www.techinterviewhandbook.org/algorithms/string/',
            type: 'article',
          },
        ],
      },
    ],
  },
  {
    name: 'Hashing',
    children: [
      {
        name: 'Videos',
        isFolder: true,
        children: [
          {
            name: 'MIT | Hashing',
            href: 'https://www.youtube.com/watch?v=Nu8YGneFCWE',
            type: 'youtube',
          },
          {
            name: 'CS50 | Hash Table',
            href: 'https://www.youtube.com/watch?v=btT4bCOvqjs',
            type: 'youtube',
          },
          {
            name: 'Abdul Bari | Hashing Technique',
            href: 'https://www.youtube.com/watch?v=mFY0J5W8Udk',
            type: 'youtube',
          },
          {
            name: 'What is a HashTable Data Structure',
            href: 'https://www.youtube.com/watch?v=MfhjkfocRR0&t',
            type: 'youtube',
          },
        ],
      },
    ],
  },
  {
    name: 'Arrays',
    children: [
      {
        name: 'Articles',
        isFolder: true,
        children: [
          {
            name: 'Array Data Structure',
            href: 'https://www.tutorialspoint.com/data_structures_algorithms/array_data_structure.htm',
            type: 'article',
          },
          {
            name: 'Getting Started with Array Data Structure',
            href: 'https://www.geeksforgeeks.org/introduction-to-arrays-data-structure-and-algorithm-tutorials/',
            type: 'article',
          },
          {
            name: 'Array cheatsheet for coding interviews',
            href: 'https://www.techinterviewhandbook.org/algorithms/array/',
            type: 'article',
          },
        ],
      },
    ],
  },
]
