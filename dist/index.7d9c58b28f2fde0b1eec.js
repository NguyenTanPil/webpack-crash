(self["webpackChunkwebpack_crash"] = self["webpackChunkwebpack_crash"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function getComponent() {
  return __webpack_require__.e(/*! import() */ "vendors-node_modules_lodash_lodash_js").then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ "./node_modules/lodash/lodash.js", 23))
    .then(({ default: _ }) => {
      const element = document.createElement('div');

      element.innerHTML = _.join(['Hello', 'webpack'], ' ');

      return element;
    })
    .catch((error) => 'An error occured while loading the component');
}

getComponent().then((component) => {
  document.body.appendChild(component);
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguN2Q5YzU4YjI4ZjJmZGUwYjFlZWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLFNBQVMseUxBQWdCO0FBQ3pCLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1jcmFzaC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRDb21wb25lbnQoKSB7XHJcbiAgcmV0dXJuIGltcG9ydCgnbG9kYXNoJylcclxuICAgIC50aGVuKCh7IGRlZmF1bHQ6IF8gfSkgPT4ge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcclxuXHJcbiAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+ICdBbiBlcnJvciBvY2N1cmVkIHdoaWxlIGxvYWRpbmcgdGhlIGNvbXBvbmVudCcpO1xyXG59XHJcblxyXG5nZXRDb21wb25lbnQoKS50aGVuKChjb21wb25lbnQpID0+IHtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=