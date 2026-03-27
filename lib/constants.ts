// Brand color - used in JS files where CSS variables aren't available
export const BRAND_COLOR = '#1C2B3A'; // Dark blue-gray
export const BRAND_COLOR_HOVER = '#3A4A5C'; // Medium blue-gray

// Sample documents for the homepage (using Open Library covers)
export const sampleDocuments = [
    {
        _id: '1',
        title: 'Clean Code',
        author: 'Robert Cecil Martin',
        slug: 'clean-code',
        coverURL: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg',
        coverColor: '#F0E6CE',
    },
    {
        _id: '2',
        title: 'JavaScript: The Definitive Guide',
        author: 'David Flanagan',
        slug: 'javascript-the-definitive-guide',
        coverURL: 'https://covers.openlibrary.org/b/isbn/9780596805524-L.jpg',
        coverColor: '#F0E6CE',
    },
    {
        _id: '3',
        title: 'Brave New World',
        author: 'Aldous Huxley',
        slug: 'brave-new-world',
        coverURL: 'https://covers.openlibrary.org/b/isbn/9780060850524-L.jpg',
        coverColor: '#F0E6CE',
    },
    {
        _id: '4',
        title: 'Rich Dad Poor Dad',
        author: 'Robert Kiyosaki',
        slug: 'rich-dad-poor-dad',
        coverURL: 'https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg',
        coverColor: '#F0E6CE',
    },
    {
        _id: '5',
        title: 'Deep Work',
        author: 'Cal Newport',
        slug: 'deep-work',
        coverURL: 'https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg',
        coverColor: '#F0E6CE',
    },
    {
        _id: '6',
        title: 'How to Win Friends and Influence People',
        author: 'Dale Carnegie',
        slug: 'how-to-win-friends-and-influence-people',
        coverURL: 'https://covers.openlibrary.org/b/isbn/9780671027032-L.jpg',
        coverColor: '#F0E6CE',
    },
    {
        _id: '7',
        title: 'The Power of Habit',
        author: 'Charles Duhigg',
        slug: 'the-power-of-habit',
        coverURL: 'https://covers.openlibrary.org/b/isbn/9781400069286-L.jpg',
        coverColor: '#F0E6CE',
    },
    {
        _id: '8',
        title: 'Atomic Habits',
        author: 'James Clear',
        slug: 'atomic-habits',
        coverURL: 'https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg',
        coverColor: '#F0E6CE',
    },
    {
        _id: '9',
        title: 'The Courage to Be Disliked',
        author: 'Fumitake Koga & Ichiro Kishimi',
        slug: 'the-courage-to-be-disliked',
        coverURL: 'https://covers.openlibrary.org/b/isbn/9781501197274-L.jpg',
        coverColor: '#F0E6CE',
    },
    {
        _id: '10',
        title: '1984',
        author: 'George Orwell',
        slug: '1984',
        coverURL: 'https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg',
        coverColor: '#F0E6CE',
    },
];

// File validation helpers
export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
export const ACCEPTED_PDF_TYPES = ['application/pdf'];
export const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10MB
export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

