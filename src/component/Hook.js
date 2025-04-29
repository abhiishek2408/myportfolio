/**
 What Are React Hooks?
Hooks are special functions in React that allow you to "hook into" React state 
and lifecycle features in functional components. Prior to hooks, these features 
were only available in class components, but hooks now bring this functionality 
to functional components.

What Are Lifecycle Features?
Lifecycle features in React are available for class components, and they provide hooks for running 
code at specific points in a component’s life cycle. These lifecycle methods allow you to manage 
resources, perform side effects, or update the state in response to changes in the component.

The lifecycle is divided into three main phases:
Mounting: The phase where the component is being created and inserted into the DOM.
Updating: The phase when the component's state or props change and it re-renders.
Unmounting: The phase when the component is removed from the DOM.


📅 Lifecycle Phases and Methods:
1. Mounting (When the component is created and inserted into the DOM)
constructor(): Called when the component is being initialized.
static getDerivedStateFromProps(): Called before every render, both for the 
initial mount and when the component is updated due to changes in props.
render(): The only required method, which returns the JSX to render.
componentDidMount(): Called immediately after the component is added to the DOM (i.e., after the first render).


🧩 Full Lifecycle Method Summary*****************

Lifecycle Method	                                                             Purpose
constructor()	                                                      Initialize state and bind methods.
static getDerivedStateFromProps()	                   Called before every render, both on initial mount and updates.
render()	                                                         Returns the JSX to render to the DOM.
componentDidMount()	                                   Runs after the first render, typically used for fetching data.
shouldComponentUpdate()	                               Determines if the component should update based on new state/props.
getSnapshotBeforeUpdate()	                           Allows capturing some info (like scroll position) before DOM updates.
componentDidUpdate()	                                        Called after updates are reflected in the DOM.
componentWillUnmount()	                                  Cleanup tasks before the component is removed from the DOM.



Lifecycle methods are only available in class components.
They allow you to control the component at different stages: when it's mounted, updated, or unmounted.
These methods are useful for side effects, managing resources (like fetching data), and optimizing performance.
With React hooks, functional components now also have access to many of the lifecycle features (via useEffect).
 */

