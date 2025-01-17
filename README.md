# React 19 useEffect Bug: Unnecessary Re-renders

This repository demonstrates a subtle bug in React 19 related to the `useEffect` hook.  Even with an empty dependency array, the effect runs after every render, leading to performance degradation. This is different from previous React versions and can be easily overlooked.

## Problem

The provided `bug.js` file shows a simple counter component. The `useEffect` hook, despite having an empty dependency array `[]`, executes on every render. This is unexpected behavior and can cause performance problems, especially with computationally expensive operations within the effect.

## Solution

The `bugSolution.js` file demonstrates the solution.  While the root cause might be a React 19 behavior change (which needs further investigation in React's own documentation or issue tracker), we can usually mitigate this by adding a check if the effect is running, and avoid repeating the effect with useReducer or useCallback to memoize the effects callback.