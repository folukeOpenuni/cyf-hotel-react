# React Quiz

Given the following component:

```jsx
import React from "react";

function PageNumber(props) {
  return <span>{props.number}</span>;
}

export default PageNumber;
```

The HTML result for `<PageNumber number="3" />` will be: `<span>3</span>`.

Now answer the following questions about the component below:

```jsx
import React from "react";

function Search(props) {
  return (
    <button id={props.id} className="button-primary">
      {props.label}
    </button>
  );
}

export default Search;
```

1. Write the HTML result for `<Search id="header-search" label="Search Now" />`.

   header-search
   Search Now

2. Write the HTML result for `<Search id="search-header" buttonLabel="Search" >`.

   Gives nothing as buttonLabel was not called

3. Write the HTML result for `<Search props.id="search-control" props.label="Find" />`.
   Find

---

The following component uses the `Search` component above. Answer the following questions for this component:

```jsx
import React from 'react';
import Search from './Search';

class Nav extends React.Component {
  constructor() {
    super()
    this.state: {
      isNavOpen: false,
      searchLabel: 'Find All',
    };
  }

  render() {
    return (
      <nav className={this.state.isNavOpen ? 'is-open' : 'is-closed'}>
        <a href="/new">New Messages</a>
        <a href="/archive">Archive</a>
        <Search id="nav-search" label={this.state.searchLabel} />
      </nav>
    )
  }
}

export default Nav;
```

4. Write the HTML result for this component.
   ANSWER
   is-open
   New Messages
   Archive
   Find All

5. In one or two sentences, describe the difference between a functional component and a class component.
   ANSWER
   functional component is similar to class comonent, however

## Locate errors

All of the examples below are wrong. Fix them by adding code that is missing or crossing out code that should not be there.

6. There is 1 error in the example below.

```jsx
import React from "react";

function Button(props) {
  return (
      <button>{props.label}</button>;
  )
}

export default Button;
```

7. There are 2 errors in the example below.

```jsx
import React from "react";

const Button = props => {
  return (
      <button className="primary-button">{props.label}</button>;
  )
};

export default Button;
```

8. There is 2 error in the example below.

```jsx
import React from "react";

function Button(props) {
  return (
  <button>{props.label}</button>;
    )
}

export default Button;
```

9. There is 1 error in the example below.

```jsx
import React from "react";

class PageNumber extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 0
    };
  }

  render() {
      return (
        <div>You are viewing page {this.state.page}.</div>;
      )
  }
}

export default PageNumber; //List is the error
```

10. There is 1 error in the example below.

```jsx
import React from "react";

class PageNumber extends Component {
  constructor() {
    super();
    this.state = {
      page: 0
    };
  }

  render() {
    return (
        <div>You are viewing page {this.state.page}.</div>;
    )
  }
};

export default PageNumber;  //List;
```

11. There is 1 error in the example below.

```jsx
import React from "react";

class PageNumber extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 0
    };
  }

  render() {
    return (
        <div>You are viewing page {this.state.page}.</div>;
    )
  }
};

export default PageNumber; //List;
```

## Working with state

12. Given the code below, add the missing function so that the `isSubmitted` property in the state is set to `true` when the submit button is clicked.

```jsx
import React from 'react';

class SubmitButton extends React.Component {
  constructor() {
    super()
    this.state: {
      isSubmitted: false
    };
  }

/* Add the missing function below this comment */
formSubmitted () {
    this.setState({
			isSubmitted: true;
		})
}
// const formSubmitted = () =>{
//     return (
//         <div>
//             SubmitButton.isSubmitted = true;
//         </div>
//     )
// }


/* Add the missing function above this comment */

  render() {
    return <button onClick={this.formSubmitted}>Submit Form</button>
  }
}

export default SubmitButton
```

13. Given the code below, add the missing function so that the `pageNumber` is decreased by one each time the "Previous" button is clicked.

```jsx
import React from 'react';

class Pagination extends React.Component {
	construct() {
		super()
		this.state: {
			pageNumber: 0
		};
	}

	nextPage() {
		this.setState({
			pageNumber: this.state.pageNumber + 1;
		})
	}

/* Add the missing function below this comment */

previousPage(){
    this.setState({
			pageNumber: this.state.pageNumber - 1;
		})
}

/* Add the missing function above this comment */

	render() {
		return (
			<div>
				<p>You are currently viewing page {pageNumber}.</p>
				<button onClick={this.previousPage}>Previous</button>
				<button onClick={this.nextPage}>Next</button>
			</div>
		)
	}
}

export default Pagination
```

14. There are two components below. Rewrite the `render` function for both components so that when the user types their name it is updated in the state of the `Profile` component.

```jsx
import React from 'react'
import TextInput from './TextInput'

class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      country: '',
    }
  }

  changeName(event) {
    const newName = event.target.value;
    const newCountry = event.target.value;

    this.setState({
      name: newName,
      country: newCountry,
    })
  }

  render() {
    return (
      <div className="profile">
        <h1>
          {this.state.name}, {this.state.country}
        </h1>
        <!-- Add your code below this comment -->
        <TextInput label="Change your name" />
        <TextInput label1="Change your country" />
        <!-- Add your code above this comment -->
      </div>

    )
  }
}

export default Profile
```

```jsx
import React from "react";

function TextInput(props) {
  /* Add the missing code below this comment */
  return (
    <label>
      <p>{props.label}</p>
      <input type="text" />
      <p>{props.label1}</p>
      <input type="text" />
    </label>
  );
  /* Add the missing code above this comment */
}

export default TextInput;
```
