% chi-squre example
% chi-square test to determine statistical difference between A and B
% (computes the contingency table and return the Chi2 and p-value measures)
function[chi2stat, pval] = chisquaretest(A, B)

[tbl,chi2stat,pval] = crosstab(A,B);

