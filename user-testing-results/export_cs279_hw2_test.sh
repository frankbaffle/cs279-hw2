#!/bin/bash

mongoexport --db cs279_hw2_test --collection logs --csv --fieldFile logs_fields.txt --out cs279_hw2_test_logs.csv
mongoexport --db cs279_hw2_test --collection nasas --csv --fieldFile nasas_fields.txt --out cs279_hw2_test_nasas.csv
mongoexport --db cs279_hw2_test --collection surveys --csv --fieldFile surveys_fields.txt --out cs279_hw2_test_surveys.csv
