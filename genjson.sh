#!/usr/bin/env bash

# Written by Donald M Langhorne 01.07.2020
# creates json files for each man section with a name and description of each command

mkdir -p data/
echo "NAME - DESCRIPTION" > data/man_all.txt

sections=(general junk library special format junk misc system)


for i in {1..8}
do
  if [ "junk" != "${sections[i-1]}" ]
  then
    echo "Creating man_${sections[i-1]}"
    echo "NAME - DESCRIPTION" > data/man_${sections[i-1]}.txt
    man -k . | grep \(${i}\) | sed "s/(${i})//g" | sort >> data/man_${sections[i-1]}.txt
    man -k . | grep \(${i}\) | sed "s/(${i})//g" | sort >> data/man_all.txt
    jq -R -s -f csv2json.jq data/man_${sections[i-1]}.txt > data/man_${sections[i-1]}.json
    rm data/man_${sections[i-1]}.txt
  fi
done

jq -R -s -f csv2json.jq data/man_all.txt > data/man_all.json
rm data/man_all.txt
