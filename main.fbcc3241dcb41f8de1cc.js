(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}function n(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}var r=function(){function e(t,r,o){var i,u,c,a=this,l=t.data,s=t.handleCard,f=t.handleDeleteIconClick,p=t.handleAddLikeClick,y=t.handleDeleteLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i=this,c=function(){a._cardElement.remove()},(u=n(u="deleteCard"))in i?Object.defineProperty(i,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[u]=c,this._likes=l.likes,this._link=l.link,this._name=l.name,this._ownerId=l.owner._id,this._cardId=l._id,this._templateSelector=r,this._handleCardClick=s,this._handleDeleteIconClick=f,this._handleAddLikeClick=p,this._handleDeleteLikeClick=y,this._userId=o,this._cardElement=this._getTemplate(),this._cardImage=this._cardElement.querySelector(".elements__card-image"),this._cardTitle=this._cardElement.querySelector(".elements__title"),this._countLikes=this._cardElement.querySelector(".elements__count-likes"),this._likeIconElement=this._cardElement.querySelector(".elements__like"),this._deleteIconElement=this._cardElement.querySelector(".elements__delete")}var r,o;return r=e,(o=[{key:"getCardId",value:function(){return this._cardId}},{key:"_setEventListenersCard",value:function(){var e=this;this._ownerId!==this._userId?this._deleteIconElement.remove():this._deleteIconElement.addEventListener("click",(function(){e._handleDeleteIconClick(e,e.cardId)})),this._likeIconElement.addEventListener("click",(function(){e._handleLikeCLick()})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._link,e._name)}))}},{key:"_checkLike",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"_handleLikeCLick",value:function(){this._checkLike()?this._handleDeleteLikeClick(this):this._handleAddLikeClick(this)}},{key:"handleLikes",value:function(e){this._likeIconElement.classList.toggle("elements__like_active"),this._likes=e.likes,0===this._likes.length?this._countLikes.textContent="0":this._countLikes.textContent=this._likes.length}},{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__card").cloneNode(!0)}},{key:"_handleLikeRender",value:function(){this._checkLike()&&this._likeIconElement.classList.add("elements__like_active")}},{key:"generateCard",value:function(){return this._setEventListenersCard(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle.textContent=this._name,this._countLikes.textContent=this._likes.length,this._handleLikeRender(),this._cardElement}}])&&t(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),e}();const o=r;function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var c=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._config=t,this._buttonSubmit=this._form.querySelector(this._config.submitButtonSelector),this._inputList=Array.from(this._form.querySelectorAll(this._config.inputSelector)),this._errorClass=this._config.errorActiveClass}var t,n;return t=e,(n=[{key:"_getErrorElement",value:function(e){return document.querySelector("#".concat(e.id,"-error"))}},{key:"_showInputError",value:function(e,t){t.textContent=e.validationMessage,e.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e,t){t.textContent="",e.classList.remove(this._errorClass)}},{key:"_disableSubmit",value:function(e){e.preventDefault()}},{key:"_handleFormInput",value:function(e){e.validity.valid?this._hideInputError(e,this._getErrorElement(e)):this._showInputError(e,this._getErrorElement(e))}},{key:"_addInputListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._handleFormInput(t),e._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){var e=this._form.checkValidity();this._buttonSubmit.disabled=!e,this._buttonSubmit.classList.toggle(this._config.buttonDisabledClass,!e)}},{key:"_resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t,e._getErrorElement(t))})),this._toggleButtonState()}},{key:"_setEventListenersValidator",value:function(){var e=this;this._form.addEventListener("reset",(function(){setTimeout((function(){e._resetValidation()}),0)})),this._form.addEventListener("submit",this._disableSubmit)}},{key:"enableValidation",value:function(){this._setEventListenersValidator(),this._addInputListeners(),this._toggleButtonState()}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const a=c;function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}const f=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d(r.key),r)}}function d(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}const h=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){"Escape"===e.key&&i.close()},(r=d(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popupElement=document.querySelector(t),this._popupActiveClass="popup_opened"}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add(this._popupActiveClass),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove(this._popupActiveClass),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mousedown",(function(t){(t.target.classList.contains(e._popupActiveClass)||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==m(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}const S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._cardImageInputElement=t._popupElement.querySelector(".popup__card-image"),t._cardNameInputElement=t._popupElement.querySelector(".popup__card-name"),t}return t=u,(n=[{key:"open",value:function(e,t){b(g(u.prototype),"open",this).call(this),this._cardImageInputElement.src=e,this._cardImageInputElement.alt=t,this._cardNameInputElement.textContent=t}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==k(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}const O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=t,n._formElement=n._popupElement.querySelector(".popup__form"),n._popupInputList=n._popupElement.querySelectorAll(".popup__input"),n._formSubmitElement=n._popupElement.querySelector(".popup__form-submit"),n._submitBtnText=n._formSubmitElement.textContent,n}return t=u,n=[{key:"setEventListeners",value:function(){var e=this;w(L(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"_getInputValues",value:function(){var e={};return this._popupInputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setInputValues",value:function(e){this._popupInputList.forEach((function(t){t.value=e[t.name]}))}},{key:"close",value:function(){w(L(u.prototype),"close",this).call(this),this._formElement.reset()}},{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._formSubmitElement.textContent=e?t:this._submitBtnText}}],n&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,R(r.key),r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}function R(e){var t=function(e,t){if("object"!==C(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===C(t)?t:String(t)}const x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}(this,e)});function u(e,t){var n,r,o,c,a=t.handleFormConfirmSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),r=T(n=i.call(this,e)),c=function(e){e.preventDefault(),n._handleFormConfirmSubmit(n._cardObj,n._cardId)},(o=R(o="_handleFormSubmit"))in r?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,n._formElement=n._popupElement.querySelector(".popup__form"),n._handleFormConfirmSubmit=a,n}return t=u,(n=[{key:"setEventListeners",value:function(){I(q(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",this._handleFormSubmit)}},{key:"open",value:function(e,t){I(q(u.prototype),"open",this).call(this),this._cardId=t,this._cardObj=e}},{key:"close",value:function(){I(q(u.prototype),"close",this).call(this)}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==D(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}const V=function(){function e(t){var n=t.nameSelector,r=t.descSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._description=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{heading:this._name.textContent,desc:this._description.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;this._name.textContent=t,this._description.textContent=n,this._avatar.src=r}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==F(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===F(o)?o:String(o)),r)}var o}const U=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"_getServStatus",value:function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}},{key:"_request",value:function(e,t){var n=this;return fetch(e,t).then((function(e){return n._getServStatus(e)}))}},{key:"getApiCard",value:function(){return this._request("".concat(this._url,"cards"),{method:"GET",headers:this._headers})}},{key:"getApiInfo",value:function(){return this._request("".concat(this._url,"users/me"),{method:"GET",headers:this._headers})}},{key:"setApiInfo",value:function(e){var t=e.heading,n=e.desc;return this._request("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})})}},{key:"setApiAvatar",value:function(e){var t=e.link;return this._request("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})})}},{key:"setApiNewCard",value:function(e){var t=e.name,n=e.link;return this._request("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})})}},{key:"deleteApiCard",value:function(e){return this._request("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"setApiLike",value:function(e){return this._request("".concat(this._url,"cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers})}},{key:"deleteApiLike",value:function(e){return this._request("".concat(this._url,"cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers})}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();var J=document.querySelector(".profile__edit-button"),G=document.querySelector(".profile__add-button"),H=document.querySelector(".profile__avatar-button");function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z,$={};z={inputSelector:".popup__input",submitButtonSelector:".popup__form-submit",errorActiveClass:"popup__input_type_error",buttonDisabledClass:"popup__form-submit_disabled"},Array.from(document.forms).forEach((function(e){var t=new a(z,e);$[e.name]=t,t.enableValidation()}));var K=new S(".popup_img");K.setEventListeners();var Q,W=function(e,t){K.open(e,t)},X=new U({url:"https://mesto.nomoreparties.co/v1/cohort-64/",headers:{"content-type":"application/json",authorization:"3e8e1ee3-c047-4c7b-af99-8c5e2a637cf7"}}),Y=function(e){var t=function(e){return new o({data:e,handleCard:W,handleDeleteIconClick:function(e){oe.open(e,e.getCardId())},handleAddLikeClick:function(e){X.setApiLike(e.getCardId()).then((function(t){e.handleLikes(t)})).catch((function(e){return alert(e)}))},handleDeleteLikeClick:function(e){X.deleteApiLike(e.getCardId()).then((function(t){e.handleLikes(t)})).catch((function(e){return alert(e)}))}},"#elements__card",Q).generateCard()}(e);Z.addItem(t)},Z=new f(Y,".elements__list");Promise.all([X.getApiCard(),X.getApiInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Q=i._id,Z.renderItems(o.reverse()),ee.setUserInfo(i)})).catch((function(e){return alert(e)}));var ee=new V({nameSelector:".profile__title",descSelector:".profile__description",avatarSelector:".profile__avatar-image"}),te=new O(".popup_edit",(function(e){te.renderLoading(!0),X.setApiInfo(e).then((function(e){ee.setUserInfo(e),te.close()})).catch((function(e){return alert(e)})).finally((function(){te.renderLoading(!1)}))}));te.setEventListeners(),J.addEventListener("click",(function(){te.open();var e=ee.getUserInfo();te.setInputValues(e)}));var ne=new O(".popup_add",(function(e){ne.renderLoading(!0),X.setApiNewCard(e).then((function(e){Y(e),ne.close()})).catch((function(e){return alert(e)})).finally((function(){ne.renderLoading(!1)}))}));ne.setEventListeners(),G.addEventListener("click",(function(){ne.open()}));var re=new O(".popup_avatar",(function(e){re.renderLoading(!0),X.setApiAvatar(e).then((function(e){ee.setUserInfo(e),re.close()})).catch((function(e){return alert(e)})).finally((function(){re.renderLoading(!1)}))}));re.setEventListeners(),H.addEventListener("click",(function(){re.open()}));var oe=new x(".popup_confirm",{handleFormConfirmSubmit:function(e,t){X.deleteApiCard(t).then((function(t){e.deleteCard(),oe.close()})).catch((function(e){return alert(e)}))}});oe.setEventListeners()})();
//# sourceMappingURL=main.fbcc3241dcb41f8de1cc.js.map