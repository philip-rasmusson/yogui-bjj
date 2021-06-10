Some common basic rules to be kept in mind to write clean code


	1.	Use the DRY principle (Don't repeat yourself).
	
	2.	Create multiple files instead of writing a big file. (Componentization of code: fix to small functionality for each file)
	
	3.	Place all your CSS files in one common folder.
	
	4.	Avoid Inline CSS as and when possible (a CSS class should be created when there are more than 2 CSS attributes).
	
	5.	Use a linter to make your code easier to review. Follow strict linting rules. This in turn helps you write clean, consistent code.
	
	6.	Review your code before creating a pull request.
	
	7.	Split your code into multiple smaller functions. Each with a single responsibility.
	
	8.	Create many utility files that can help you remove duplicate code from multiple files.
	
	9.	Separate all your service calls into a separate file. If it’s a big project try to split the services into multiple files. (name convention module_name.service.js).
	
	10.	Name your files logically according to the job that they perform.
	
	11.	Clean code is self-commenting(using the right variable names and function names). Use comments only to explain complex functions.
	
	12.	Always write test cases for your code. Keep tests files in sync with the files they are testing.
	
	13.	Destructuring your props is a good way to help make your coder cleaner and more maintainable. For example (async function authenticate({ user_id, token }) {})
	
	14.	Use useReducer when useState becomes complex.
	
	15.	Putting imports in an order a. React import b. Library imports (Alphabetical order) c. Absolute imports from the project (Alphabetical order) d. Relative imports (Alphabetical order) e. Import * as f. Import ‘./<some file>.<some extension> Each kind should be separated by an empty line. This makes your imports clean and easy to understand for all the components, 3rd-party libraries, and etc.
	
	16.	Use index.js for each folder to export (Avoid repeating names on the imports)
