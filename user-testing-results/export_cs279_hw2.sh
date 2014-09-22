#!/bin/bash

mongoexport --db cs279_hw2 --collection logs --csv --fieldFile logs_fields.txt --out cs279_hw2_logs.csv
mongoexport --db cs279_hw2 --collection nasas --csv --fieldFile nasas_fields.txt --out cs279_hw2_nasas.csv
mongoexport --db cs279_hw2 --collection surveys --csv --fieldFile surveys_fields.txt --out cs279_hw2_surveys.csv
