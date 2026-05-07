# Editor Products

## Project Description

Editor can be used to edit and update online restaurant menus or marketplace products.

The program is built on creating dynamic elements. Worked with UI/UX — the quantity of created sections and products will be displayed to the employee. I've implemented recalculation of array indexes when deleting a section or product (they are also section and product numbers). The quantity of sections and products is also recalculated.

## Update/edit:

- image.
- name.
- description.
- price.
- checkbox (for labels: Apply discount, Out of stock, Delivery, Pick-up).

---

## Technologies Used

- **HTML** - technical wrappers and semantics, assigned identifiers for convenient manipulation of dynamic elements.
- **SCSS** - modular system, nesting, media queries, mixins, variables, normalize, Grid-layout, Flexbox.
- **JavaScript** - modular system, event delegation, interaction functions, functions to assist the worker.
- **localStorage** - a module for working with data storage and updating (rendering/re-rendering existing data when loading a page) has been implemented.

---

### Production:

- https://editor-products.vercel.app/

### Hosting

- Vercel: https://vercel.com/

---

### Video review

YouTube (Ukrainian language)

Topics covered:

- How to use the application
- Data receiving and rendering module
- Interaction functions and unit tests
- createElement() function and its test (in English)

---

### Quick program overview

- open the website: https://editor-products.vercel.app/
- click the Auto Test button
- click the Online Store button
- if you need to clear the received data, click the Clear Data button

---

## Project Structure

### External files and configurations

```
public/
   favicon.ico
.gitignore
index.html
jest.config.mjs
package-lock.json
package.json
README.md

```

```
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
        setup-delegated-events.js  → event management
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
      local-storage/   → module
           render-data/
               render-aside-data.js
               render-main-data.js
               render-product-data.js
         get-data.js
         local-storage.js
         update-name-ls.js
         update-name.js
      ui/
            autofill-data/ → module
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
       _normalaize.scss
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
    style.scss  → importing styles
   tests/     → unit tests
        js/
          interaction-helpers-test/
             api.test.js
             create-element.test.js
             hide-elements.test.js
             random-id.test.js

```

---

## Interaction Functions

- can be reused anywhere in the code

- **api()**: request to the service https://jsonhosting.com/ for receiving data.
  I created an object with data and uploaded it to https://jsonhosting.com/api/json/8299afe0/raw.
- **createElement()**: for dynamic creation of elements - accepts a tag, options (classes, properties, attributes), and a parent.
- **hideElements()**: accepts an event, parent, child, options (properties and attributes).
- **generateRandomId()**: сreates a random identifier consisting of two parts: a random part (made of substrings) and a timestamp converted to text using the specified radix.

## Helper Functions

- **addTextStart()**: adds a value to the beginning of a product name.
- **addTextEnd()**: adds a value to the end of a product name.
- **deleteText()**: deletes a value from a product name.
- **replaceText()**: replaces a value in a product name.
- **highlightText()**: highlight a value of a product name.
- **removeSection()**: deletes the product section, and the root panel (in aside).
- **hideShow()**: hide or show products into sections.
- **clearInputValue()**: clearing the value of the input field after the function runs.

## UX Functions

- **getDataInModal()**: receiving data of a product, in modal window.
- **upLoadImages()**: a folder for selecting an image opened on the PC.
- **loadingImages()**: uploading an image selected by the user.
- **removeImages()**: deleting an image by double-clicking.
- **restoreImgElements()**: automatic element restoration after image deletion. The tag and attributes are restored.
- **removeProduct()**: deleting the product from section.
- **removeSection()**: deleting the section with products.

## UI Functions

- **calculate the quantity of sections**
- **calculate the quantity of products**
- **recalculate the indexes of the section array (when deleting)**
- **recalculate the indexes of the product array (when deleting)**

## localStorage Main Functions

- if there is saved data in local storage, the data will be restored when the page is reloaded.

- **renderAsideLocalStorage()**
- **renderMainLocalStorage()**
- **renderProductLocalStorage()**

## Quick Program Testing Functions

- **dataInDOM()**: the module function accepts an object with data from the API function, creates elements, and enters data.
- **storeModal()**: emulating an online store. Creating a modal window, retrieving data from local storage, and rendering the data.
- **clearData()**: returns the program to its initial state. Deletes all created elements and clears local storage.

### Notes by functions

- to all functions the written **JSDoc**.
- decomposition was performed as needed to extract logic, preserving code readability as much as possible.
- functions with a modular structure are marked in the project structure. Modules can be created for all functions as needed.

## Jest

- Tested: **Interaction Functions**

- **api()**
- **createElement()**
- **hideElements()**
- **generateRandomId()**

---

### Known limitations:

After full page reload, some **Helper Functions** do not work as expected.
This is caused by DOM-based state management in vanilla JavaScript.
In the next iteration, this problem will be solved using React and centralized state management.

---

## Running a project

```bash
# Installing dependencies
npm install

# Starting the dev server
npm run dev

# Running a tests
npm test ./api.test.js
npm test ./create-element.test.js
npm test ./hide-elements.test.js
npm test ./random-id.test.js

# Building a project
npm run build
```
