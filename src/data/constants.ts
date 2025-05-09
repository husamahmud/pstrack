import pLimit from 'p-limit'

/**
 * App version
 */
export const VERSION = '2.3.20'

/**
 * Repository information
 */
export const USERNAME = 'husamahmud'
export const REPO_NAME = 'pstrack'

/**
 * UI configuration
 */
export const VISIBLE_COUNT = 20

/**
 * LeetCode URLs
 */
export const PROBLEM_BASE_URL = 'https://leetcode.com/problems'
export const LEETCODE_GQL_BASE_URL = 'https://leetcode.com/graphql'

/**
 * Admin management
 */
export const AUTHOR_EMAIL = 'husamahmud@gmail.com'
export const ADMINS_EMAILS = ['husamahmud@gmail.com', 'nezhataghy@gmail.com']

/**
 * Authentication and authorization
 */
export const PROTECTED_ROUTES = ['/dashboard']

/**
 * Problem tracking thresholds
 */
export const UNSOLVED_THRESHOLD = 6
export const MAX_LEETCODERS = 35
export const NOT_STARTED_GROUPS = [7]

/**
 * API request configuration
 */
export const BATCH_SIZE = 20
export const DELAY_MS = 5000
export const LIMIT = pLimit(5)
