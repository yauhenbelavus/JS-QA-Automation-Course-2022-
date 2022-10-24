import { checker } from "./checker"

// positive
checker(7, 7, "+", 14),
checker(7, 7, "-", 0),
checker(7, 7, "/", 1),
checker(7, 7, "*", 49),
checker(7, 0, "+", 7),
checker(8, 1, "*", 8),
checker(8, 1, "/", 8)



// negative
checker(7, 7, "+", 15),
checker(7, 7, "-", 1),
checker(7, 7, "/", 7),
checker(7, 7, "*", 50),
checker(7, 0, "+", 10),
checker(8, 1, "*", 12),
checker(8, 1, "/", 12)