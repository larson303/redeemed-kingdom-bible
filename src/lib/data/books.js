/**
 * Redeemed Kingdom Bible - Book Metadata
 *
 * Each book has:
 * - id: unique identifier
 * - slug: URL slug
 * - english: English name
 * - transliteration: Hebrew/Aramaic/Greek transliteration
 * - meaning: Name meaning
 * - chapters: total chapter count
 * - testament: 'ot' | 'dc' | 'nt'
 * - filePrefix: file name prefix matching static HTML files
 * - padDigits: number of digits for chapter number padding (default 2, Psalms uses 3)
 */

export const books = [
	// --- Old Testament ---
	{ id: 'front-matter', slug: 'front-matter', english: 'Preface', transliteration: 'Preface', meaning: '', chapters: 1, testament: 'ot', filePrefix: 'Front_Matter', padDigits: 2 },
	{ id: 'genesis', slug: 'genesis', english: 'Genesis', transliteration: 'Bereshit', meaning: 'In the beginning', chapters: 50, testament: 'ot', filePrefix: 'Genesis', padDigits: 2 },
	{ id: 'exodus', slug: 'exodus', english: 'Exodus', transliteration: 'Shemot', meaning: 'Names', chapters: 40, testament: 'ot', filePrefix: 'Exodus', padDigits: 2 },
	{ id: 'leviticus', slug: 'leviticus', english: 'Leviticus', transliteration: 'Vayikra', meaning: 'And He called', chapters: 27, testament: 'ot', filePrefix: 'Leviticus', padDigits: 2 },
	{ id: 'numbers', slug: 'numbers', english: 'Numbers', transliteration: 'Bamidbar', meaning: 'In the wilderness', chapters: 36, testament: 'ot', filePrefix: 'Numbers', padDigits: 2 },
	{ id: 'deuteronomy', slug: 'deuteronomy', english: 'Deuteronomy', transliteration: 'Devarim', meaning: 'Words', chapters: 34, testament: 'ot', filePrefix: 'Deuteronomy', padDigits: 2 },
	{ id: 'joshua', slug: 'joshua', english: 'Joshua', transliteration: 'Yehoshua', meaning: 'Yahweh is salvation', chapters: 24, testament: 'ot', filePrefix: 'Joshua', padDigits: 2 },
	{ id: 'judges', slug: 'judges', english: 'Judges', transliteration: 'Shoftim', meaning: 'Judges', chapters: 21, testament: 'ot', filePrefix: 'Judges', padDigits: 2 },
	{ id: 'ruth', slug: 'ruth', english: 'Ruth', transliteration: 'Rut', meaning: 'Friend / companion', chapters: 4, testament: 'ot', filePrefix: 'Ruth', padDigits: 2 },
	{ id: '1-samuel', slug: '1-samuel', english: '1 Samuel', transliteration: '1 Shemuel', meaning: 'Heard by God', chapters: 31, testament: 'ot', filePrefix: '1_Samuel', padDigits: 2 },
	{ id: '2-samuel', slug: '2-samuel', english: '2 Samuel', transliteration: '2 Shemuel', meaning: 'Heard by God', chapters: 24, testament: 'ot', filePrefix: '2_Samuel', padDigits: 2 },
	{ id: '1-kings', slug: '1-kings', english: '1 Kings', transliteration: '1 Melakhim', meaning: 'Kings', chapters: 22, testament: 'ot', filePrefix: '1_Kings', padDigits: 2 },
	{ id: '2-kings', slug: '2-kings', english: '2 Kings', transliteration: '2 Melakhim', meaning: 'Kings', chapters: 25, testament: 'ot', filePrefix: '2_Kings', padDigits: 2 },
	{ id: '1-chronicles', slug: '1-chronicles', english: '1 Chronicles', transliteration: '1 Divrei HaYamim', meaning: 'Words of the days', chapters: 29, testament: 'ot', filePrefix: '1_Chronicles', padDigits: 2 },
	{ id: '2-chronicles', slug: '2-chronicles', english: '2 Chronicles', transliteration: '2 Divrei HaYamim', meaning: 'Words of the days', chapters: 36, testament: 'ot', filePrefix: '2_Chronicles', padDigits: 2 },
	{ id: 'ezra', slug: 'ezra', english: 'Ezra', transliteration: 'Ezra', meaning: 'Helper', chapters: 10, testament: 'ot', filePrefix: 'Ezra', padDigits: 2 },
	{ id: 'nehemiah', slug: 'nehemiah', english: 'Nehemiah', transliteration: 'NehemYah', meaning: 'Comforted by Yahweh', chapters: 13, testament: 'ot', filePrefix: 'Nehemiah', padDigits: 2 },
	{ id: 'esther', slug: 'esther', english: 'Esther', transliteration: 'Hadassah', meaning: 'Myrtle tree', chapters: 10, testament: 'ot', filePrefix: 'Esther', padDigits: 2 },
	{ id: 'job', slug: 'job', english: 'Job', transliteration: 'Iyov', meaning: 'Persecuted / Where is the father?', chapters: 42, testament: 'ot', filePrefix: 'Job', padDigits: 2 },
	{ id: 'psalms', slug: 'psalms', english: 'Psalms', transliteration: 'Tehillim', meaning: 'Praises', chapters: 150, testament: 'ot', filePrefix: 'Psalms', padDigits: 3 },
	{ id: 'proverbs', slug: 'proverbs', english: 'Proverbs', transliteration: 'Mishlei', meaning: 'Proverbs / Parables', chapters: 31, testament: 'ot', filePrefix: 'Proverbs', padDigits: 2 },
	{ id: 'ecclesiastes', slug: 'ecclesiastes', english: 'Ecclesiastes', transliteration: 'Qohelet', meaning: 'The preacher / Assembler', chapters: 12, testament: 'ot', filePrefix: 'Ecclesiastes', padDigits: 2 },
	{ id: 'song-of-solomon', slug: 'song-of-solomon', english: 'Song of Solomon', transliteration: 'Shir HaShirim', meaning: 'Song of songs', chapters: 8, testament: 'ot', filePrefix: 'Song_of_Solomon', padDigits: 2 },
	{ id: 'isaiah', slug: 'isaiah', english: 'Isaiah', transliteration: 'Yeshayahu', meaning: 'Salvation of Yahweh', chapters: 66, testament: 'ot', filePrefix: 'Isaiah', padDigits: 2 },
	{ id: 'jeremiah', slug: 'jeremiah', english: 'Jeremiah', transliteration: 'YirmeYahu', meaning: 'Yahweh will exalt', chapters: 52, testament: 'ot', filePrefix: 'Jeremiah', padDigits: 2 },
	{ id: 'lamentations', slug: 'lamentations', english: 'Lamentations', transliteration: 'Eikhah', meaning: 'How!', chapters: 5, testament: 'ot', filePrefix: 'Lamentations', padDigits: 2 },
	{ id: 'ezekiel', slug: 'ezekiel', english: 'Ezekiel', transliteration: 'Yechezkel', meaning: 'God will strengthen', chapters: 48, testament: 'ot', filePrefix: 'Ezekiel', padDigits: 2 },
	{ id: 'daniel', slug: 'daniel', english: 'Daniel', transliteration: 'Daniyyel', meaning: 'God is my judge', chapters: 12, testament: 'ot', filePrefix: 'Daniel', padDigits: 2 },
	{ id: 'hosea', slug: 'hosea', english: 'Hosea', transliteration: 'Hoshea', meaning: 'Salvation', chapters: 14, testament: 'ot', filePrefix: 'Hosea', padDigits: 2 },
	{ id: 'joel', slug: 'joel', english: 'Joel', transliteration: 'Yoel', meaning: 'Yahweh is God', chapters: 3, testament: 'ot', filePrefix: 'Joel', padDigits: 2 },
	{ id: 'amos', slug: 'amos', english: 'Amos', transliteration: 'Amos', meaning: 'Burden bearer', chapters: 9, testament: 'ot', filePrefix: 'Amos', padDigits: 2 },
	{ id: 'obadiah', slug: 'obadiah', english: 'Obadiah', transliteration: 'Ovadyah', meaning: 'Servant of Yahweh', chapters: 1, testament: 'ot', filePrefix: 'Obadiah', padDigits: 2 },
	{ id: 'jonah', slug: 'jonah', english: 'Jonah', transliteration: 'Yonah', meaning: 'Dove', chapters: 4, testament: 'ot', filePrefix: 'Jonah', padDigits: 2 },
	{ id: 'micah', slug: 'micah', english: 'Micah', transliteration: 'Mikhah', meaning: 'Who is like Yahweh?', chapters: 7, testament: 'ot', filePrefix: 'Micah', padDigits: 2 },
	{ id: 'nahum', slug: 'nahum', english: 'Nahum', transliteration: 'Nachum', meaning: 'Comforter', chapters: 3, testament: 'ot', filePrefix: 'Nahum', padDigits: 2 },
	{ id: 'habakkuk', slug: 'habakkuk', english: 'Habakkuk', transliteration: 'Chavakuk', meaning: 'Embrace', chapters: 3, testament: 'ot', filePrefix: 'Habakkuk', padDigits: 2 },
	{ id: 'zephaniah', slug: 'zephaniah', english: 'Zephaniah', transliteration: 'TsephanYah', meaning: 'Hidden by Yahweh', chapters: 3, testament: 'ot', filePrefix: 'Zephaniah', padDigits: 2 },
	{ id: 'haggai', slug: 'haggai', english: 'Haggai', transliteration: 'Chaggai', meaning: 'My feast / Festive', chapters: 2, testament: 'ot', filePrefix: 'Haggai', padDigits: 2 },
	{ id: 'zechariah', slug: 'zechariah', english: 'Zechariah', transliteration: 'ZekharYah', meaning: 'Yahweh remembers', chapters: 14, testament: 'ot', filePrefix: 'Zechariah', padDigits: 2 },
	{ id: 'malachi', slug: 'malachi', english: 'Malachi', transliteration: 'Malakhi', meaning: 'My messenger', chapters: 4, testament: 'ot', filePrefix: 'Malachi', padDigits: 2 },

	// --- Deuterocanon ---
	{ id: 'tobit', slug: 'tobit', english: 'Tobit', transliteration: 'Tovit', meaning: 'My goodness', chapters: 14, testament: 'dc', filePrefix: 'Tobit', padDigits: 2 },
	{ id: 'judith', slug: 'judith', english: 'Judith', transliteration: 'Yehudit', meaning: 'Woman of Judah', chapters: 16, testament: 'dc', filePrefix: 'Judith', padDigits: 2 },
	{ id: 'esther-greek', slug: 'esther-greek', english: 'Esther (Greek)', transliteration: 'Hadassah (Greek)', meaning: 'Myrtle tree', chapters: 16, testament: 'dc', filePrefix: 'Esther_Greek', padDigits: 2 },
	{ id: 'wisdom-of-solomon', slug: 'wisdom-of-solomon', english: 'Wisdom of Solomon', transliteration: 'Chokhmat Shelomoh', meaning: 'Wisdom of Solomon', chapters: 19, testament: 'dc', filePrefix: 'Wisdom_of_Solomon', padDigits: 2 },
	{ id: 'sirach', slug: 'sirach', english: 'Sirach', transliteration: 'Ben Sira', meaning: 'Son of Sira', chapters: 51, testament: 'dc', filePrefix: 'Sirach', padDigits: 2 },
	{ id: 'baruch', slug: 'baruch', english: 'Baruch', transliteration: 'Barukh', meaning: 'Blessed', chapters: 6, testament: 'dc', filePrefix: 'Baruch', padDigits: 2 },
	{ id: 'daniel-greek', slug: 'daniel-greek', english: 'Daniel (Greek)', transliteration: 'Daniyyel (Greek)', meaning: 'God is my judge', chapters: 14, testament: 'dc', filePrefix: 'Daniel_Greek', padDigits: 2 },
	{ id: '1-maccabees', slug: '1-maccabees', english: '1 Maccabees', transliteration: '1 Makabim', meaning: 'Hammer', chapters: 16, testament: 'dc', filePrefix: '1_Maccabees', padDigits: 2 },
	{ id: '2-maccabees', slug: '2-maccabees', english: '2 Maccabees', transliteration: '2 Makabim', meaning: 'Hammer', chapters: 15, testament: 'dc', filePrefix: '2_Maccabees', padDigits: 2 },
	{ id: '1-esdras', slug: '1-esdras', english: '1 Esdras', transliteration: '1 Ezra', meaning: 'Helper', chapters: 9, testament: 'dc', filePrefix: '1_Esdras', padDigits: 2 },
	{ id: 'prayer-of-manasseh', slug: 'prayer-of-manasseh', english: 'Prayer of Manasseh', transliteration: 'Tefillat Menasheh', meaning: 'Prayer of Manasseh', chapters: 1, testament: 'dc', filePrefix: 'Prayer_of_Manasseh', padDigits: 2 },
	{ id: 'psalm-151', slug: 'psalm-151', english: 'Psalm 151', transliteration: 'Tehillim 151', meaning: 'Praise 151', chapters: 1, testament: 'dc', filePrefix: 'Psalm_151', padDigits: 2 },
	{ id: '3-maccabees', slug: '3-maccabees', english: '3 Maccabees', transliteration: '3 Makabim', meaning: 'Hammer', chapters: 7, testament: 'dc', filePrefix: '3_Maccabees', padDigits: 2 },
	{ id: '2-esdras', slug: '2-esdras', english: '2 Esdras', transliteration: '2 Ezra', meaning: 'Helper', chapters: 16, testament: 'dc', filePrefix: '2_Esdras', padDigits: 2 },
	{ id: '4-maccabees', slug: '4-maccabees', english: '4 Maccabees', transliteration: '4 Makabim', meaning: 'Hammer', chapters: 18, testament: 'dc', filePrefix: '4_Maccabees', padDigits: 2 },

	// --- New Testament ---
	{ id: 'matthew', slug: 'matthew', english: 'Matthew', transliteration: 'Mattityahu', meaning: 'Gift of Yahweh', chapters: 28, testament: 'nt', filePrefix: 'Matthew', padDigits: 2 },
	{ id: 'mark', slug: 'mark', english: 'Mark', transliteration: 'Markos', meaning: 'Polite / Shining', chapters: 16, testament: 'nt', filePrefix: 'Mark', padDigits: 2 },
	{ id: 'luke', slug: 'luke', english: 'Luke', transliteration: 'Loukas', meaning: 'Light-giving', chapters: 24, testament: 'nt', filePrefix: 'Luke', padDigits: 2 },
	{ id: 'john', slug: 'john', english: 'John', transliteration: 'Yahuchanan', meaning: 'Yahweh is gracious', chapters: 21, testament: 'nt', filePrefix: 'John', padDigits: 2 },
	{ id: 'acts', slug: 'acts', english: 'Acts', transliteration: 'Ma\'asei', meaning: 'Acts / Deeds', chapters: 28, testament: 'nt', filePrefix: 'Acts', padDigits: 2 },
	{ id: 'romans', slug: 'romans', english: 'Romans', transliteration: 'Romiyim', meaning: 'Romans', chapters: 16, testament: 'nt', filePrefix: 'Romans', padDigits: 2 },
	{ id: '1-corinthians', slug: '1-corinthians', english: '1 Corinthians', transliteration: '1 Qorintiyim', meaning: 'Corinthians', chapters: 16, testament: 'nt', filePrefix: '1_Corinthians', padDigits: 2 },
	{ id: '2-corinthians', slug: '2-corinthians', english: '2 Corinthians', transliteration: '2 Qorintiyim', meaning: 'Corinthians', chapters: 13, testament: 'nt', filePrefix: '2_Corinthians', padDigits: 2 },
	{ id: 'galatians', slug: 'galatians', english: 'Galatians', transliteration: 'Galatiyim', meaning: 'Galatians', chapters: 6, testament: 'nt', filePrefix: 'Galatians', padDigits: 2 },
	{ id: 'ephesians', slug: 'ephesians', english: 'Ephesians', transliteration: 'Efesiyim', meaning: 'Ephesians', chapters: 6, testament: 'nt', filePrefix: 'Ephesians', padDigits: 2 },
	{ id: 'philippians', slug: 'philippians', english: 'Philippians', transliteration: 'Filippiyim', meaning: 'Philippians', chapters: 4, testament: 'nt', filePrefix: 'Philippians', padDigits: 2 },
	{ id: 'colossians', slug: 'colossians', english: 'Colossians', transliteration: 'Qolasiyim', meaning: 'Colossians', chapters: 4, testament: 'nt', filePrefix: 'Colossians', padDigits: 2 },
	{ id: '1-thessalonians', slug: '1-thessalonians', english: '1 Thessalonians', transliteration: '1 Tesloniqiyim', meaning: 'Thessalonians', chapters: 5, testament: 'nt', filePrefix: '1_Thessalonians', padDigits: 2 },
	{ id: '2-thessalonians', slug: '2-thessalonians', english: '2 Thessalonians', transliteration: '2 Tesloniqiyim', meaning: 'Thessalonians', chapters: 3, testament: 'nt', filePrefix: '2_Thessalonians', padDigits: 2 },
	{ id: '1-timothy', slug: '1-timothy', english: '1 Timothy', transliteration: '1 Timoteos', meaning: 'Honoring God', chapters: 6, testament: 'nt', filePrefix: '1_Timothy', padDigits: 2 },
	{ id: '2-timothy', slug: '2-timothy', english: '2 Timothy', transliteration: '2 Timoteos', meaning: 'Honoring God', chapters: 4, testament: 'nt', filePrefix: '2_Timothy', padDigits: 2 },
	{ id: 'titus', slug: 'titus', english: 'Titus', transliteration: 'Titos', meaning: 'Pleasing', chapters: 3, testament: 'nt', filePrefix: 'Titus', padDigits: 2 },
	{ id: 'philemon', slug: 'philemon', english: 'Philemon', transliteration: 'Philemon', meaning: 'Loving', chapters: 1, testament: 'nt', filePrefix: 'Philemon', padDigits: 2 },
	{ id: 'hebrews', slug: 'hebrews', english: 'Hebrews', transliteration: 'Ivrim', meaning: 'Hebrews', chapters: 13, testament: 'nt', filePrefix: 'Hebrews', padDigits: 2 },
	{ id: 'james', slug: 'james', english: 'James', transliteration: 'Ya\'akov', meaning: 'Heel-catcher / Supplanter', chapters: 5, testament: 'nt', filePrefix: 'James', padDigits: 2 },
	{ id: '1-peter', slug: '1-peter', english: '1 Peter', transliteration: '1 Kepha', meaning: 'Rock', chapters: 5, testament: 'nt', filePrefix: '1_Peter', padDigits: 2 },
	{ id: '2-peter', slug: '2-peter', english: '2 Peter', transliteration: '2 Kepha', meaning: 'Rock', chapters: 3, testament: 'nt', filePrefix: '2_Peter', padDigits: 2 },
	{ id: '1-john', slug: '1-john', english: '1 John', transliteration: '1 Yahuchanan', meaning: 'Yahweh is gracious', chapters: 5, testament: 'nt', filePrefix: '1_John', padDigits: 2 },
	{ id: '2-john', slug: '2-john', english: '2 John', transliteration: '2 Yahuchanan', meaning: 'Yahweh is gracious', chapters: 1, testament: 'nt', filePrefix: '2_John', padDigits: 2 },
	{ id: '3-john', slug: '3-john', english: '3 John', transliteration: '3 Yahuchanan', meaning: 'Yahweh is gracious', chapters: 1, testament: 'nt', filePrefix: '3_John', padDigits: 2 },
	{ id: 'jude', slug: 'jude', english: 'Jude', transliteration: 'Yehudah', meaning: 'Praise Yahweh', chapters: 1, testament: 'nt', filePrefix: 'Jude', padDigits: 2 },
	{ id: 'revelation', slug: 'revelation', english: 'Revelation', transliteration: 'Hitgalut', meaning: 'Revelation / Unveiling', chapters: 22, testament: 'nt', filePrefix: 'Revelation', padDigits: 2 },
];

/** Find a book by its slug */
export function findBook(slug) {
	return books.find(b => b.slug === slug);
}

/** Get books filtered by testament */
export function getBooksByTestament(testament) {
	return books.filter(b => b.testament === testament);
}

/** Get the chapter filename for a given book and chapter number */
export function getChapterFilename(book, chapter) {
	const padded = String(chapter).padStart(book.padDigits || 2, '0');
	return `${book.filePrefix}${padded}.html`;
}

/** Get prev/next chapter info for navigation */
export function getChapterNav(bookSlug, chapter) {
	const book = findBook(bookSlug);
	if (!book) return { prev: null, next: null };

	const bookIndex = books.indexOf(book);
	let prev = null;
	let next = null;

	if (chapter > 1) {
		prev = { book: book.slug, chapter: chapter - 1 };
	} else {
		// Previous book's last chapter
		for (let i = bookIndex - 1; i >= 0; i--) {
			if (books[i].id !== 'front-matter') {
				prev = { book: books[i].slug, chapter: books[i].chapters };
				break;
			}
		}
	}

	if (chapter < book.chapters) {
		next = { book: book.slug, chapter: chapter + 1 };
	} else {
		// Next book's first chapter
		for (let i = bookIndex + 1; i < books.length; i++) {
			if (books[i].id !== 'front-matter') {
				next = { book: books[i].slug, chapter: 1 };
				break;
			}
		}
	}

	return { prev, next, book };
}

export const articles = [
	{ slug: 'the-name-of-jesus', title: 'The Name of Jesus', description: 'How Yehoshua became Jesus through centuries of translation' },
	{ slug: 'the-importance-of-names', title: 'The Importance of Names', description: 'Why Biblical names carry meaning and why transliteration matters' },
];
