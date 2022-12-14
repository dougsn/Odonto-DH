// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
<<<<<<< HEAD
<<<<<<< HEAD
// import { server } from './mocks/server.js'
=======
//import { server } from './mocks/server.js'
>>>>>>> fbc5d96061a47cbc84882ba3b15dbcb8ab2b9e9f
=======
//import { server } from './mocks/server.js'
>>>>>>> fbc5d96061a47cbc84882ba3b15dbcb8ab2b9e9f

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())

window.alert = ()=>{}
