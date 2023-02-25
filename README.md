# An example of how you can use Axios to make an Api call in a React project with Typescript

In this example, we create an App component that uses useState to store the list of posts returned by the API. Then, we use useEffect to trigger the API call right after the component is assembled, using axios.get.

Note that we pass the generic type Post[] to the Axios get method to indicate that we expect to receive a list of posts.

In case of success in the API call, we update the state with the data received using setPosts.

In case of error, we just print the error to the console for debugging purposes.

Finally, we render the list of posts using the map method on the array of posts stored in state.

# To run
npm start
