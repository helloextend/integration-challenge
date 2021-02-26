# Extend Integrations Challenge

## Setup

1. If you haven't already, Signup for GitHub and [install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

2. [Create a new repository](https://github.com/new) called `integration-challenge` and set it to Private.

3. Clone this repository.

   `git clone git@github.com:helloextend/integration-challenge.git`

4. `cd` into the cloned `integration-challenge` repo and add your private repository as a remote, so you can push to it.

   `git remote add upstream git@github.com:YOUR_USERNAME/integration-challenge.git`

5. Create a new branch off the `integration-challenge` repo, where you can make your code changes and open a PR to the `master` branch once you're done.

   `git checkout -b challenge`

6. After you've finished coding the challenge, when you're ready to push your code to your branch, make sure to do `git push upstream challenge`.

Make sure you have Node.js setup and `yarn` installed globally, then start the repo:

```
yarn
yarn start
```

You should now have the app running on http://localhost:3001

This project leverages ESLint to lint your code, and Prettier to format it. You can automatically run these in your IDE by installing the ESLint and Prettier extensions for your IDE.

At any time, you can also run lint via `yarn lint`, and format your code via `yarn format`.

**Before submitting your code, please make sure to lint and format it.**

## Challenge

1. We'd like you to create your own modal component.

   Treat it like a component that you'll be integrating in a variety of websites. Your code should be good quality, even if the client's website is not. Readable, maintainable code is good.
   Your modal should interfere as little as possible with the client’s website code, and it should be reusable in other websites. Remember, the client may modify their website's javascript code in the future, and ideally your integration should be separated enough from their code such that the modal can continue working.

- Your modal's HTML, javascript, and CSS should be handwritten by you. Please use either vanilla JS or jQuery.
- Your modal will ask the user to optionally select the size of business they are.
- Your modal will need to show the user's currently selected business size.
- While your modal is active, there should be a background overlay behind the modal and on top of the client's website, preventing clicks through to the rest of the page.
- Your modal should look similar to ![this](https://github.com/helloextend/integration-challenge/raw/master/modal-example-pic.png)
- Your modal should close and submit the underlying form only if one of the follow scenarios is met:

  1.  The user has selected a type of business and clicked the "I have selected my business size" button.
  2.  Or the user has selected "I do not want to specify my business size" link.

2.  Once you have your modal, the client has asked you to integrate it into their website (`src/client`).
    They've asked that we first integrate the modal into the Send Inquiry button on their "Get In Touch" form.
    The goal:

    1.  Whenever a user clicks Send Inquiry, before the contact form is submitted, your modal should appear.
    2.  Upon submitting the modal, we should submit their "Get In Touch" form.

3.  There's a second place that the client wants us to integrate the modal into. They have a sidebar accessible via the "SEE CUSTOM SOLUTIONS" button in the middle of their website. In that sidebar they list which custom solutions they have, and then display a "Get In Contact" form.
    The goal:

    1.  You should integrate your modal into this form as well, making sure that when the user clicks a button to try and submit the form, your modal appears.
    2.  Upon submitting the modal, their form should then be submitted.

4.  Once you're happy with your modal and the integrations you've done, submit a PR in your repository with a descriptive message, and no more than a few commits (each with a clear purpose)

5.  Complete any additional steps provided by your hiring contact.

## Tips

- Try not to remove or change the client's code where possible, but instead focus on adding to it.

- Adding classes or IDs to elements on the client's website is often ok if necessary to enable the javascript to access specific DOM elements.

- On some clients' websites, you may need to work around the way they coded their app.
