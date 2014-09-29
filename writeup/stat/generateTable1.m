clear;clc;close all;

%[num,txt,raw] = xlsread('cs279_hw2_nasas_wt.xls');
[num,txt,raw] = xlsread('cs279_hw2_online_nasas.xls');

CM_ind = strcmp(txt(2:end,8),'CommandMaps')

%1: mental
%2: physical
%3: temporal
%5: hard work
%6: frustration
col = 6;
feat_ = num(2:end, col);
feat_CM = feat_(CM_ind);
feat_Rib = feat_(~CM_ind);

mean_feat_Rib = mean(feat_Rib)
std_feat_Rib = std(feat_Rib)
mean_feat_CM = mean(feat_CM)
std_feat_CM = std(feat_CM)
[chi2stat, p] = chisquaretest(feat_CM, feat_Rib)