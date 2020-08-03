---
type: code
date: 2020-07-11
title: MD Test JavaScript - Inline
excerpt: Javascript in MD
---
import CardView from '~/components/CardView.vue'
import ImageView from '~/components/ImageView.vue'
import SolarSystem from '~/components/SolarSystem.vue'

# Solar Systems
```js script
import './components/SolarSystem.vue';
```
<SolarSystem />

# This is my PAGE component - not working
```js script
import './components/ImageView.vue';
```
# Start MD

<ImageView />

# Finish MD

```js script
import './components/CardView.vue';
```
# This is my component
![MD Test](../static/zenSecurity.svg)
<CardView />

- [X] [foo](#bar)
- [ ] [baz](#qux)
- [ ] [fez](#faz)