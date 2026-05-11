# Editor Products

## Overview

Editor Products is a dynamic product editor for restaurant menus and marketplace platforms.

The application allows employees to:

- create product sections
- add and edit products
- upload images
- update product information
- manage UI interactions
- preview the final online store interface

The project is focused on dynamic DOM rendering, reusable interaction functions, UI helpers, and persistent application state.

A major focus of the project was preserving and restoring all application states after page reload.

All created sections, products, images, inputs, and UI states are restored from localStorage and rendered back into the DOM.

---

## Live Demo

Production:

- https://editor-products.vercel.app/

Hosting:

- Vercel: https://vercel.com/

---

## Technologies Used

### Frontend

- HTML
- SCSS
- JavaScript

### Storage

- localStorage

### Testing

- Jest

### Build Tools

- Vite

### Deployment

- Vercel
- Docker

---

## Docker

The project can also be launched inside a Docker container.

Docker Hub:

- https://hub.docker.com/repository/docker/1ikuzenkov1/editor-products-js/general

The Docker container provides a fast local setup and isolated testing environment.

### Run container

```bash
docker pull 1ikuzenkov1/editor-products-js
docker run -p 8080:80 1ikuzenkov1/editor-products-js
```
Open in browser: 
http://localhost:8080
---

## Video Overview

YouTube (Ukrainian language):

- https://www.youtube.com/watch?v=ji4QoGJxyeY

The video includes:

- project overview
- dynamic UI rendering
- product creation flow
- helper functions
- event delegation
- localStorage architecture
- render/re-render logic
- createElement() overview
- Grid and Flexbox explanation
- Docker project launch
- modal windows
- online store preview
- interaction functions
- dynamic data rendering
- Jest tests overview

---

## Main Features

### Product Management

The employee can:

- create sections
- create products
- edit product data
- upload images
- remove products
- remove sections
- manage labels and settings

---

### Product Editing

Each product supports:

- image upload
- title editing
- description editing
- price editing
- checkbox labels:
  - Apply discount
  - Out of stock
  - Delivery
  - Pick-up

---

### Dynamic UI Rendering

The project is built around dynamic element creation.

The HTML structure is intentionally minimal.

Most UI elements are generated dynamically through JavaScript functions.

Main dynamic function:

- `createElement()`

The function creates:

- sections
- products
- buttons
- inputs
- modals
- helper UI elements

---

## Persistent State System

One of the main project goals was complete UI restoration after page reload.

The application stores all important data inside localStorage.

After refresh:

- sections are restored
- products are restored
- images are restored
- inputs are restored
- modal data is restored
- UI structure is restored

The DOM is rebuilt dynamically from stored data.

Main restore functions:

- `renderAsideLocalStorage()`
- `renderMainLocalStorage()`
- `renderProductLocalStorage()`

---

## Auto Test System

The project includes an automatic testing/demo mode.

Button:

- `Auto Test`

Features:

- loads prepared JSON data
- dynamically renders sections and products
- fills application state automatically
- speeds up UI testing

The data is loaded through API requests.

---

## Online Store Preview

The project includes:

- `Online Store`

This mode emulates how products could appear on a real website.

The preview renders stored product data dynamically.

---

## Architecture Approach

The project uses:

- modular JavaScript structure
- reusable interaction functions
- helper functions
- event delegation
- localStorage rendering system
- isolated UI modules
- SCSS modular architecture

The codebase is separated into:

- UI
- helpers
- storage
- rendering
- events
- styles
- tests

---

## Event Delegation

Most UI interactions are implemented through event delegation.

Main file:

- `setup-delegated-events.js`

The project listens for events on parent containers and detects target elements using:

```js
closest()
```

This approach reduces duplicated listeners and simplifies dynamic UI support.

---

## Helper Functions

Reusable helper functions:

- `addTextStart()`
- `addTextEnd()`
- `deleteText()`
- `replaceText()`
- `highlightText()`
- `hideShow()`
- `clearInputValue()`

These functions work with dynamic product editing and UI helpers.

---

## Interaction Functions

### `api()`

Receives JSON data from external API.

---

### `createElement()`

Dynamic DOM element creation function.

Supports:

- classes
- attributes
- properties
- parent element

---

### `hideElements()`

Controls UI visibility.

---

### `generateRandomId()`

Creates unique identifiers using:

- random substrings
- timestamp conversion

---

## UX Functions

### `getDataInModal()`

Displays product data inside modal windows.

---

### `loadingImages()`

Uploads selected images.

---

### `removeImages()`

Deletes uploaded images.

---

### `restoreImgElements()`

Restores removed image upload elements dynamically.

The function recreates:

- input type="file"
- required attributes
- helper elements

---

## UI Features

The project includes:

- hover states
- outline states
- focus states
- interactive UI feedback
- helper UI indicators

The UI was designed to simplify employee workflow and improve editing speed.

---

## SCSS Architecture

The project uses modular SCSS architecture.

Structure includes:

- layout modules
- header modules
- aside modules
- modal modules
- store modules
- variables
- mixins
- normalize system

Main entry:

```scss
style.scss
```

The styling system was built for scalability and easier extension.

---

## Grid & Flexbox

The project actively uses:

- CSS Grid
- Flexbox

Grid is used for:

- page layout
- section positioning
- responsive structure

Flexbox is used for:

- alignment
- axis positioning
- UI element distribution

## Jest Tests

Tested functions:

- `api()`
- `createElement()`
- `hideElements()`
- `generateRandomId()`

The project includes unit tests for interaction logic.

---

## Local Development

```bash
# Clone repository
git clone https://github.com/iKuzenkov/editor-products-js.git

# Open project folder
cd editor-products-js

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build project
npm run build
```

---

## Project Structure

<details>
<summary>Open project structure</summary>

```text
src/
  js/
    dom/
      main.js → program initialization

    modules/
      events/
        main-ui/
          add-product-in-section.js
          add-section-in-aside.js
          add-section-in-main.js

        setup-delegated-events.js → event management

      helpers/
        add-text-end/
          add-text-end.js

        add-text-start/
          add-text-start.js

        delete-text/
          delete-text.js

        get-data-in-modal/
          get-data-in-modal.js

        hide/
          hide.js

        highlight-text/
          highlight-text.js

        images/
          loading-images-ls.js
          loading-images.js
          restore-elements.js

        remove-products/
          remove-products.js
          remove-products-ls.js

        remove-section/
          remove-section-ls.js
          remove-section.js

        replace-text/
          replace-text.js

        utils/
          clear-elements.js
          save-state-function-ls.js

      interaction-helpers/
        api.js
        create-elements.js
        hide-elements.js
        random-id.js

      local-storage/
        render-data/
          render-aside-data.js
          render-main-data.js
          render-product-data.js

        get-data.js
        local-storage.js
        update-name-ls.js
        update-name.js

      ui/
        autofill-data/
          autofill.js
          click-elements.js
          destructuring-data.js
          entry-data.js
          get-data.js
          save-ls.js

        clear-data/
          clear-ls.js

        store-modal/
          get-section-data-ls.js
          render-data.js
          store-modal.js

        modals.js
        render-initial-ui.js

  styles/
    aside/
      _aside-layout.scss
      _aside.scss
      _container-aside.scss
      _section-aside.scss

    footer/
      _footer.scss

    globals/
      _global-layout.scss
      _globals.scss

    header/
      _btn-online-store.scss
      _container-header.scss
      _header-layout.scss
      _header.scss

    layout/
      _grid-layout.scss
      _layout.scss

    main/
      _container-main.scss
      _main-layout.scss
      _main.scss
      _product.scss
      _section-header.scss
      _section-main.scss
      _section-products.scss

    mixins/
      _mixins.scss

    modal/
      _buttons.scss
      _content.scss
      _general-container.scss
      _layout.scss
      _modal.scss
      _options.scss

    normalize/
      _normalize.scss

    store-modal/
      _buttons-store.scss
      _content-store.scss
      _general-container-store.scss
      _layout-store.scss
      _modal-store.scss
      _product.scss
      _section.scss

    variables/
      _variables.scss

    style.scss → importing styles

  tests/
    js/
      interaction-helpers-test/
        api.test.js
        create-element.test.js
        hide-elements.test.js
        random-id.test.js

public/
  favicon.ico

.gitignore
index.html
jest.config.mjs
package-lock.json
package.json
README.md
```


The project uses a modular folder structure for:

- rendering
- event handling
- helper functions
- localStorage logic
- UI modules
- styles
- tests

</details>

---

## Project Highlights

This project demonstrates:

- dynamic DOM rendering
- modular JavaScript architecture
- event delegation
- localStorage persistence
- render/re-render systems
- reusable helper functions
- UI/UX interaction logic
- SCSS architecture
- Docker usage
- Jest testing
- Grid & Flexbox understanding

---

## Summary

Editor Products is a frontend-focused dynamic editor built around real UI interaction logic.

The project demonstrates:

- dynamic interface generation
- persistent application state
- modular architecture
- reusable interaction systems
- DOM manipulation
- rendering systems
- storage synchronization
- scalable SCSS structure

The project was designed as a practical interface for managing restaurant menus and marketplace products.