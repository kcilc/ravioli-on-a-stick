---
layout: ../layouts/Recipe1.astro
title: hi
image: test
alt: testing

description: plub

ingredients:
    - &ai
        name: broccoli
        amount:
            - 1
            - head
    - &bi
        name: &b salt 
        amount:
            - 1
            - tsp

hasPreamble: false
directions: 
    -
        -
            type: text
            content: "Chop the "
        -
            type: ingredient
            content: *ai
        -   
            type: text
            content: " into approximately one-inch pieces."
    
---
