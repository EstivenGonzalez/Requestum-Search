# Requestum Search

## General

**Project name:** Requestum Search

**Project goal:** To help users search for repositories on GitHub.

**Project description:** A mobile application that displays repositories based on a search term. The application utilized the api.github.com to fetch the data. React Native was used as the framework, along with hooks and functional components for development.

---

## Tech stack

- React Native
- Axios
- TypeScript
- Redux Toolkit
- styled-components
- Zod

---

## Local environment

- **node** v18.15.0 - You may use [n](https://github.com/tj/n) to install and use this version

- **ruby** 2.7.6 - You may use [rbenv](http://rbenv.org/) or [rvm](https://rvm.io/) to install and use this version

**Application not deployed**

---

## Running applications locally

1. `git clone https://github.com/EstivenGonzalez/Requestum-Search.git`
2. `cd Requestum-Search`
3. `yarn`
4. `cd ios && pod install && cd ..` - IOS only
5. `yarn ios` or `yarn android`
6. `adb reverse tcp:8081 tcp:8081` - Android only

![](https://i.postimg.cc/0NYGYxrB/Simulator-Screenshot-i-Phone-12-Pro-Max-2023-06-03-at-20-25-03.png)
