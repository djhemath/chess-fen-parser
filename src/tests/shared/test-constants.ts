export const unsupportedDataTypes = [
    false,
    true,
    undefined,
    null,
    [],
];

export const correctFENStrings = [
    "r6r/1b2k1bq/8/8/7B/8/8/R3K2R b KQ - 3 2",
    "8/8/8/2k5/2pP4/8/B7/4K3 b - d3 0 3",
    "r1bqkbnr/pppppppp/n7/8/8/P7/1PPPPPPP/RNBQKBNR w KQkq - 2 2",
    "r3k2r/p1pp1pb1/bn2Qnp1/2qPN3/1p2P3/2N5/PPPBBPPP/R3K2R b KQkq - 3 2",
    "2kr3r/p1ppqpb1/bn2Qnp1/3PN3/1p2P3/2N5/PPPBBPPP/R3K2R b KQ - 3 2",
    "rnb2k1r/pp1Pbppp/2p5/q7/2B5/8/PPPQNnPP/RNB1K2R w KQ - 3 9",
    "2r5/3pk3/8/2P5/8/2K5/8/8 w - - 5 4",
    "rnbq1k1r/pp1Pbppp/2p5/8/2B5/8/PPP1NnPP/RNBQK2R w KQ - 1 8",
    "r4rk1/1pp1qppp/p1np1n2/2b1p1B1/2B1P1b1/P1NP1N2/1PP1QPPP/R4RK1 w - - 0 10",
    "3k4/3p4/8/K1P4r/8/8/8/8 b - - 0 1",
    "8/8/4k3/8/2p5/8/B2P2K1/8 w - - 0 1",
    "8/8/1k6/2b5/2pP4/8/5K2/8 b - d3 0 1",
    "5k2/8/8/8/8/8/8/4K2R w K - 0 1",
    "3k4/8/8/8/8/8/8/R3K3 w Q - 0 1",
    "r3k2r/1b4bq/8/8/8/8/7B/R3K2R w KQkq - 0 1",
    "r3k2r/8/3Q4/8/8/5q2/8/R3K2R b KQkq - 0 1",
    "2K2r2/4P3/8/8/8/8/8/3k4 w - - 0 1",
    "8/8/1P2K3/8/2n5/1q6/8/5k2 b - - 0 1",
    "4k3/1P6/8/8/8/8/K7/8 w - - 0 1",
    "8/P1k5/K7/8/8/8/8/8 w - - 0 1",
    "K1k5/8/P7/8/8/8/8/8 w - - 0 1",
    "8/k1P5/8/1K6/8/8/8/8 w - - 0 1",
    "8/8/2k5/5q2/5n2/8/5K2/8 b - - 0 1",
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR b K c3 0 1",
    "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
    "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2",
    "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
    "8/5k2/3p4/1p1Pp2p/pP2Pp1P/P4P1K/8/8 b - - 99 50",
    "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
    "4k2r/6r1/8/8/8/8/3R4/R3K3 w Qk - 0 1",
    "8/8/8/4p1K1/2k1P3/8/8/8 b - - 0 1",
];

export const inCorrectFENStrings = [
    "r6r/1b2k1bq/8/8/7B/8/8/R3K2R",
    "r6r/1b2k1bq/8/8/7B/8/8/R3K2R b",
    "r6r/1b2k1bq/8/8/7B/8/8/R3K2R b KQ",
    "r6r/1b2k1bq/8/8/7B/8/8/R3K2R b KQ -",
    "r6r/1b2k1bq/8/8/7B/8/8/R3K2R b KQ - 3",
    "r6r/1b2k1bq/8/8/7B/8/8/R3K2R b  - 3 2",
    "            ",
    "",

    ...unsupportedDataTypes,
];

export const inCorrectPiecePlacements = [
    "r6r/1b2k1bq/8/8/7B/8/R3K2R",
    "r6r/1b2k1bq/8/8/7B/8/8/RR2K2R",
    "r6r/1b2k1bq/8/8/7B/8/8/R3Q2R",
    "rr5r/1b2k1bq/8/8/7B/8/8/R3K2R",
    "r6r/1b2n1bq/8/8/7B/8/8/R3K2R",
    "r6r/1b2k1bq/8/8/7B/9/8/R3K2R",
    "r6r/1b2k1bq/8/8/7B/8/8/R4K2R",
    "",
    "///////",
    
    ...unsupportedDataTypes,
]

export const inCorrectActiveColors = [
    "a",
    "c",
    "abc",
    " KQ",
    "B",
    "W",
    "-",

    ...unsupportedDataTypes,
]

export const incorrectCastlingAvailability = [
    "a",
    "1",
    "abc",
    "a1",
    "kqKQk",
    "kqKK",
    "---",
    "-----",

    ...unsupportedDataTypes,
];

export const incorrectEnPassantTargets = [
    "",
    " ",
    "-1",
    "- ",
    " -",
    "a1",
    "b2",
    "c4",
    "d5",
    "e7",
    "g8",
    "h7",
    "a",
    "h",
    "3",
    "6",

    ...unsupportedDataTypes,
];

export const incorrectEnPassantTargetsForBlack = [
    "a6",
    "b6",
    "c6",
    "d6",
    "e6",
    "f6",
    "g6",
    "h6"
];

export const incorrectEnPassantTargetsForWhite = [
    "a3",
    "b3",
    "c3",
    "d3",
    "e3",
    "f3",
    "g3",
    "h3"
];

export const validNonEmptyArrays = [
    [1],
    [""],
    [1, 2, "a", true],
    [true],
    [false],
    [null],
    [undefined],
];

export const invalidArrays = [
    true,
    false,
    undefined,
    null,
    [],
    new Array(),
];