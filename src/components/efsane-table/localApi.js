export  default {
  data(){
    return {
      alignOptions:[
        {
          label:"Center",
          name:"center"
        },
        {
          label:"Left",
          name:"left"
        },
        {
          label:"Right",
          name:"right"
        }
      ],
      actionMethods:[
        {
          label:"Download CSV",
          name:"downloadCsv"
        },
        {
          label:"Download JSON",
          name:"downloadJson"
        },
      ],
      typeOptions:[
        {
          label:"Data",
          name:"data"
        },
        {
          label:"Slot",
          name:"slot"
        },
        {
          label:"Actions",
          name:"action"
        },
        {
          label:"Checkbox",
          name:"checkbox"
        },
        {
          label:"Row Number",
          name:"row_number"
        }
      ],
      listManipulation:[
        {
          label:"Just take the first row in the list",
          name:"first"
        },
        {
          label:"Get all separated by commas",
          name:"commas"
        },
        {
          label:"Give the sum of numeric expressions",
          name:"sum"
        },
      ],
      textManipulation:[
        {
          label:"UPPER CASE",
          name:"upper"
        },
        {
          label:"lower case",
          name:"lower"
        },
        {
          label:"Title Case",
          name:"title"
        },
        {
          label:"Capitalize case",
          name:"capitalize"
        },
        {
          label:"Default",
          name:"default"
        },
      ],
      shortcuts:[
        {
          value:"ctrl+a",
          label:"Ctrl + A",
          firstControl: "ctrlKey",
          secondControl: "a"
        },
        {
          value:"ctrl+b",
          label:"Ctrl + B",
          firstControl: "ctrlKey",
          secondControl: "b"
        },
        {
          value:"ctrl+c",
          label:"Ctrl + C",
          firstControl: "ctrlKey",
          secondControl: "c"
        },
        {
          value:"ctrl+d",
          label:"Ctrl + D",
          firstControl: "ctrlKey",
          secondControl: "d"
        },
        {
          value:"ctrl+e",
          label:"Ctrl + E",
          firstControl: "ctrlKey",
          secondControl: "e"
        },
        {
          value:"ctrl+f",
          label:"Ctrl + F",
          firstControl: "ctrlKey",
          secondControl: "f"
        },
        {
          value:"ctrl+q",
          label:"Ctrl + Q",
          firstControl: "ctrlKey",
          secondControl: "q"
        },
        {
          value:"ctrl+r",
          label:"Ctrl + R",
          firstControl: "ctrlKey",
          secondControl: "r"
        },
        // { reversed shortcut
        //   value:"ctrl+s",
        //   label:"Ctrl + S",
        //   firstControl: "ctrlKey",
        //   secondControl: "s"
        // },
        {
          value:"ctrl+t",
          label:"Ctrl + T",
          firstControl: "ctrlKey",
          secondControl: "t"
        },
        {
          value:"ctrl+u",
          label:"Ctrl + U",
          firstControl: "ctrlKey",
          secondControl: "u"
        },
        {
          value:"ctrl+v",
          label:"Ctrl + V",
          firstControl: "ctrlKey",
          secondControl: "v"
        },
        {
          value:"ctrl+w",
          label:"Ctrl + W",
          firstControl: "ctrlKey",
          secondControl: "w"
        },
        {
          value:"ctrl+x",
          label:"Ctrl + X",
          firstControl: "ctrlKey",
          secondControl: "x"
        },
        {
          value:"ctrl+z",
          label:"Ctrl + Z",
          firstControl: "ctrlKey",
          secondControl: "z"
        },
        {
          value:"shift+a",
          label:"Shift + A",
          firstControl: "shiftKey",
          secondControl: "a"
        },
        {
          value:"shift+b",
          label:"Shift + B",
          firstControl: "shiftKey",
          secondControl: "b"
        },
        {
          value:"shift+c",
          label:"Shift + C",
          firstControl: "shiftKey",
          secondControl: "c"
        },
        {
          value:"shift+d",
          label:"Shift + D",
          firstControl: "shiftKey",
          secondControl: "d"
        },
        {
          value:"shift+e",
          label:"Shift + E",
          firstControl: "shiftKey",
          secondControl: "e"
        },
        {
          value:"shift+f",
          label:"Shift + F",
          firstControl: "shiftKey",
          secondControl: "f"
        },
        {
          value:"shift+q",
          label:"Shift + Q",
          firstControl: "shiftKey",
          secondControl: "q"
        },
        {
          value:"shift+r",
          label:"Shift + R",
          firstControl: "shiftKey",
          secondControl: "r"
        },
        {
          value:"shift+s",
          label:"Shift + S",
          firstControl: "shiftKey",
          secondControl: "s"
        },
        {
          value:"shift+t",
          label:"Shift + T",
          firstControl: "shiftKey",
          secondControl: "t"
        },
        {
          value:"shift+u",
          label:"Shift + U",
          firstControl: "shiftKey",
          secondControl: "u"
        },
        {
          value:"shift+v",
          label:"Shift + V",
          firstControl: "shiftKey",
          secondControl: "v"
        },
        {
          value:"shift+w",
          label:"Shift + W",
          firstControl: "shiftKey",
          secondControl: "w"
        },
        {
          value:"shift+x",
          label:"Shift + X",
          firstControl: "shiftKey",
          secondControl: "x"
        },
        {
          value:"shift+z",
          label:"Shift + Z",
          firstControl: "shiftKey",
          secondControl: "z"
        },
        {
          value:"alt+a",
          label:"Alt + A",
          firstControl: "altKey",
          secondControl: "a"
        },
        {
          value:"alt+b",
          label:"Alt + B",
          firstControl: "altKey",
          secondControl: "b"
        },
        {
          value:"alt+c",
          label:"Alt + C",
          firstControl: "altKey",
          secondControl: "c"
        },
        {
          value:"alt+d",
          label:"Alt + D",
          firstControl: "altKey",
          secondControl: "d"
        },
        {
          value:"alt+e",
          label:"Alt + E",
          firstControl: "altKey",
          secondControl: "e"
        },
        {
          value:"alt+f",
          label:"Alt + F",
          firstControl: "altKey",
          secondControl: "f"
        },
        {
          value:"alt+q",
          label:"Alt + Q",
          firstControl: "altKey",
          secondControl: "q"
        },
        {
          value:"alt+r",
          label:"Alt + R",
          firstControl: "altKey",
          secondControl: "r"
        },
        {
          value:"alt+s",
          label:"Alt + S",
          firstControl: "altKey",
          secondControl: "s"
        },
        {
          value:"alt+t",
          label:"Alt + T",
          firstControl: "altKey",
          secondControl: "t"
        },
        {
          value:"alt+u",
          label:"Alt + U",
          firstControl: "altKey",
          secondControl: "u"
        },
        {
          value:"alt+v",
          label:"Alt + V",
          firstControl: "altKey",
          secondControl: "v"
        },
        {
          value:"alt+w",
          label:"Alt + W",
          firstControl: "altKey",
          secondControl: "w"
        },
        {
          value:"alt+x",
          label:"Alt + X",
          firstControl: "altKey",
          secondControl: "x"
        },
        {
          value:"alt+z",
          label:"Alt + Z",
          firstControl: "altKey",
          secondControl: "z"
        }
      ],
      icons: [
            {
              name:"add-message",
              svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__" aria-hidden="true"><title>__TITLE__</title><g fill="__ICON_COLOR__"><path d="M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.175 6.876c-.414 0-.75.336-.75.75v8.078c0 .414-.337.75-.75.75H4.095c-.412 0-.75-.336-.75-.75V8.298l6.778 4.518c.368.246.79.37 1.213.37.422 0 .844-.124 1.212-.37l4.53-3.013c.336-.223.428-.676.204-1.012-.223-.332-.675-.425-1.012-.2l-4.53 3.014c-.246.162-.563.163-.808 0l-7.586-5.06V5.5c0-.414.337-.75.75-.75h9.094c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.096c-1.24 0-2.25 1.01-2.25 2.25v13.455c0 1.24 1.01 2.25 2.25 2.25h14.48c1.24 0 2.25-1.01 2.25-2.25v-8.078c0-.415-.337-.75-.75-.75z"></path></g></svg>`
            },
            {
              name:"arrow-up-double",
              svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__" aria-hidden="true"><title>__TITLE__</title><g fill="__ICON_COLOR__"><path d="M12 4.656l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0L12 4.656z"></path><path d="M12 12.465l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0l8.72-8.72z"></path></g></svg>`
            },
            {
              name:"tag",
              svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  aria-hidden="true" ><title>__TITLE__</title><g fill="__ICON_COLOR__"><path d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"></path></g></svg>`
            },
            {
              name:"ring",
              svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__" aria-hidden="true" ><title>__TITLE__</title><g fill="__ICON_COLOR__"><path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"></path></g></svg>`
            },
            {
              name:"bookmark",
              svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__" aria-hidden="true" ><title>__TITLE__</title><g fill="__ICON_COLOR__"><path d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"></path></g></svg>`
            },
            {
              name:"list",
              svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__" aria-hidden="true" ><title>__TITLE__</title><g fill="__ICON_COLOR__"><path d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z"></path><path d="M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z"></path></g></svg>`
            },
            {
              name:"dots-cover",
              svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__" aria-hidden="true" ><title>__TITLE__</title><g fill="__ICON_COLOR__"><circle cx="17" cy="12" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="7" cy="12" r="1.5"></circle><path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path></g></svg>`
            },
            {
              name:"dots",
              svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__" aria-hidden="true"><title>__TITLE__</title><g fill="__ICON_COLOR__"><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>`
            },
            {
              name:"ìmage",
              svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__" aria-hidden="true"><title>__TITLE__</title><g fill="__ICON_COLOR__"><path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"></path><circle cx="8.868" cy="8.309" r="1.542"></circle></g></svg>`
            },
            {
              name:"heart",
              svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__" aria-hidden="true"><title>__TITLE__</title><g fill="__ICON_COLOR__"><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>`
            },
            {
              name:"search",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__" style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><circle  cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`
            },
            {
              name:"activity",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__" style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><polyline  points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`
            },
            {
              name:"alert-circle",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__" style="stroke: __ICON_COLOR__;"  stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><circle  cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
            },
            {
              name:"alert-octagon",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__" style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><polygon  points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
            },
            {
              name:"alert-triangle",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__" style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path  d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
            },
            {
              name:"anchor",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__" style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><circle  cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path></svg>`
            },
            {
              name:"archive",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__" style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><polyline  points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>`
            },
            {
              name:"arrow-down-left",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline></svg>`
            },
            {
              name:"arrow-down-right",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><line  x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>`
            },
            {
              name:"arrow-down",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><line  x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>`
            },
            {
              name:"arrow-left-circle",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><circle  cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>`
            },
            {
              name:"arrow-right",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><line  x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`
            },
            {
              name:"arrow-up",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><circle  cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line></svg>`
            },
            {
              name:"arrow-up-left",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><line  x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline></svg>`
            },
            {
              name:"arrow-up-right",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><line  x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`
            },
            {
              name:"arrow-up-2",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><line  x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>`
            },
            {
              name:"award",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><circle  cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`
            },
            {
              name:"bell-off",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
            },
            {
              name:"bell",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`
            },
            {
              name:"cloud-drizzle",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><line  x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>`
            },
            {
              name:"cloud-lightning",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline></svg>`
            },
            {
              name:"cloud-rain",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><line  x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>`
            },
            {
              name:"cloud-snow",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line></svg>`
            },
            {
              name:"cloud",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`
            },
            {
              name:"crosshair",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><circle  cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>`
            },
            {
              name:"download-cloud",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><polyline  points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path></svg>`
            },
            {
              name:"download",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`
            },
            {
              name:"edit-2",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>`
            },
            {
              name:"edit-3",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`
            },
            {
              name:"edit",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`
            },
            {
              name:"external-link",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`
            },
            {
              name:"eye-off",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
            },
            {
              name:"eye",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`
            },
            {
              name:"feather",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>`
            },
            {
              name:"file-minus",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line></svg>`
            },
            {
              name:"file-plus",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>`
            },
            {
              name:"file-text",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`
            },
            {
              name:"file",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>`
            },
            {
              name:"filter",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><polygon  points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>`
            },
            {
              name:"flag",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>`
            },
            {
              name:"folder-minus",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line></svg>`
            },
            {
              name:"folder-plus",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg>`
            },
            {
              name:"folder",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`
            },
            {
              name:"moon",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
            },
            {
              name:"loader",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><line  x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>`
            },
            {
              name:"lock",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`
            },
            {
              name:"location",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`
            },
            {
              name:"map",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><polygon  points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>`
            },
            {
              name:"message-circle",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`
            },
            {
              name:"message-square",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`
            },
            {
              name:"menu",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><line  x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`
            },
            {
              name:"music",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`
            },
            {
              name:"navigation-2",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><polygon  points="12 2 19 21 12 17 5 21 12 2"></polygon></svg>`
            },
            {
              name:"octagon",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><polygon  points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon></svg>`
            },
            {
              name:"package",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><line  x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`
            },
            {
              name:"paperclip",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>`
            },
            {
              name:"percent",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><line  x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>`
            },
            {
              name:"phone-call",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`
            },
            {
              name:"play-circle",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><circle  cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>`
            },
            {
              name:"plus-circle",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><circle  cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>`
            },
            {
              name:"plus-square",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>`
            },
            {
              name:"printer",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><polyline  points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>`
            },
            {
              name:"radio",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><circle  cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>`
            },
            {
              name:"refresh-ccw",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><polyline  points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>`
            },
            {
              name:"repeat",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><polyline  points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>`
            },
            {
              name:"save",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>`
            },
            {
              name:"scissors",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><circle  cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>`
            },
            {
              name:"send",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><line  x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`
            },
            {
              name:"share",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><circle  cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>`
            },
            {
              name:"shield-off",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
            },
            {
              name:"shield",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
            },
            {
              name:"shopping-bag",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><circle  cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`
            },
            {
              name:"sliders",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><line  x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>`
            },
            {
              name:"smile",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><circle  cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`
            },
            {
              name:"tool",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`
            },
            {
              name:"trash",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><polyline  points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`
            },
            {
              name:"trash-2",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><polyline  points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`
            },
            {
              name:"triangle",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>`
            },
            {
              name:"truck",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`
            },
            {
              name:"unlock",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>`
            },
            {
              name:"user-check",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>`
            },
            {
              name:"user-minus",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line></svg>`
            },
            {
              name:"user-plus",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>`
            },
            {
              name:"user-x",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line></svg>`
            },
            {
              name:"user",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`
            },
            {
              name:"x-circle",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><circle  cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`
            },
            {
              name:"x-octagon",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><polygon  points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`
            },
            {
              name:"x-square",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>`
            },
            {
              name:"wifi-off",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><line  x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>`
            },
            {
              name:"wifi",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>`
            },
            {
              name:"monitor",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`
            },
            {
              name:"list-2",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><line  x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>`
            },
            {
              name:"server",
              svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="__WIDTH__" height="__HEIGHT__"  style="stroke: __ICON_COLOR__;" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><title>__TITLE__</title><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`
            }
      ],
      colors: [
        {
          color: "Red",
          variations: [
            {
              weight: 50,
              hex: "#FFEBEE"
            },
            {
              weight: 100,
              hex: "#FFCDD2"
            },
            {
              weight: 200,
              hex: "#EF9A9A"
            },
            {
              weight: 300,
              hex: "#E57373"
            },
            {
              weight: 400,
              hex: "#EF5350"
            },
            {
              weight: 500,
              hex: "#F44336"
            },
            {
              weight: 600,
              hex: "#E53935"
            },
            {
              weight: 700,
              hex: "#D32F2F"
            },
            {
              weight: 800,
              hex: "#C62828"
            },
            {
              weight: 900,
              hex: "#B71C1C"
            }
          ]
        },
        {
          color: "Pink",
          variations: [
            {
              weight: 50,
              hex: "#FCE4EC"
            },
            {
              weight: 100,
              hex: "#F8BBD0"
            },
            {
              weight: 200,
              hex: "#F48FB1"
            },
            {
              weight: 300,
              hex: "#F06292"
            },
            {
              weight: 400,
              hex: "#EC407A"
            },
            {
              weight: 500,
              hex: "#E91E63"
            },
            {
              weight: 600,
              hex: "#D81B60"
            },
            {
              weight: 700,
              hex: "#C2185B"
            },
            {
              weight: 800,
              hex: "#AD1457"
            },
            {
              weight: 900,
              hex: "#880E4F"
            }
          ]
        },
        {
          color: "Purple",
          variations: [
            {
              weight: 50,
              hex: "#F3E5F5"
            },
            {
              weight: 100,
              hex: "#E1BEE7"
            },
            {
              weight: 200,
              hex: "#CE93D8"
            },
            {
              weight: 300,
              hex: "#BA68C8"
            },
            {
              weight: 400,
              hex: "#AB47BC"
            },
            {
              weight: 500,
              hex: "#9C27B0"
            },
            {
              weight: 600,
              hex: "#8E24AA"
            },
            {
              weight: 700,
              hex: "#7B1FA2"
            },
            {
              weight: 800,
              hex: "#6A1B9A"
            },
            {
              weight: 900,
              hex: "#4A148C"
            }
          ]
        },
        {
          color: "Deep Purple",
          variations: [
            {
              weight: 50,
              hex: "#EDE7F6"
            },
            {
              weight: 100,
              hex: "#D1C4E9"
            },
            {
              weight: 200,
              hex: "#B39DDB"
            },
            {
              weight: 300,
              hex: "#9575CD"
            },
            {
              weight: 400,
              hex: "#7E57C2"
            },
            {
              weight: 500,
              hex: "#673AB7"
            },
            {
              weight: 600,
              hex: "#5E35B1"
            },
            {
              weight: 700,
              hex: "#512DA8"
            },
            {
              weight: 800,
              hex: "#4527A0"
            },
            {
              weight: 900,
              hex: "#311B92"
            }
          ]
        },
        {
          color: "Indigo",
          variations: [
            {
              weight: 50,
              hex: "#E8EAF6"
            },
            {
              weight: 100,
              hex: "#C5CAE9"
            },
            {
              weight: 200,
              hex: "#9FA8DA"
            },
            {
              weight: 300,
              hex: "#7986CB"
            },
            {
              weight: 400,
              hex: "#5C6BC0"
            },
            {
              weight: 500,
              hex: "#3F51B5"
            },
            {
              weight: 600,
              hex: "#3949AB"
            },
            {
              weight: 700,
              hex: "#303F9F"
            },
            {
              weight: 800,
              hex: "#283593"
            },
            {
              weight: 900,
              hex: "#1A237E"
            }
          ]
        },
        {
          color: "Blue",
          variations: [
            {
              weight: 50,
              hex: "#E3F2FD"
            },
            {
              weight: 100,
              hex: "#BBDEFB"
            },
            {
              weight: 200,
              hex: "#90CAF9"
            },
            {
              weight: 300,
              hex: "#64B5F6"
            },
            {
              weight: 400,
              hex: "#42A5F5"
            },
            {
              weight: 500,
              hex: "#2196F3"
            },
            {
              weight: 600,
              hex: "#1E88E5"
            },
            {
              weight: 700,
              hex: "#1976D2"
            },
            {
              weight: 800,
              hex: "#1565C0"
            },
            {
              weight: 900,
              hex: "#0D47A1"
            }
          ]
        },
        {
          color: "Light Blue",
          variations: [
            {
              weight: 50,
              hex: "#E1F5FE"
            },
            {
              weight: 100,
              hex: "#B3E5FC"
            },
            {
              weight: 200,
              hex: "#81D4FA"
            },
            {
              weight: 300,
              hex: "#4FC3F7"
            },
            {
              weight: 400,
              hex: "#29B6F6"
            },
            {
              weight: 500,
              hex: "#03A9F4"
            },
            {
              weight: 600,
              hex: "#039BE5"
            },
            {
              weight: 700,
              hex: "#0288D1"
            },
            {
              weight: 800,
              hex: "#0277BD"
            },
            {
              weight: 900,
              hex: "#01579B"
            }
          ]
        },
        {
          color: "Cyan",
          variations: [
            {
              weight: 50,
              hex: "#E0F7FA"
            },
            {
              weight: 100,
              hex: "#B2EBF2"
            },
            {
              weight: 200,
              hex: "#80DEEA"
            },
            {
              weight: 300,
              hex: "#4DD0E1"
            },
            {
              weight: 400,
              hex: "#26C6DA"
            },
            {
              weight: 500,
              hex: "#00BCD4"
            },
            {
              weight: 600,
              hex: "#00ACC1"
            },
            {
              weight: 700,
              hex: "#0097A7"
            },
            {
              weight: 800,
              hex: "#00838F"
            },
            {
              weight: 900,
              hex: "#006064"
            }
          ]
        },
        {
          color: "Teal",
          variations: [
            {
              weight: 50,
              hex: "#E0F2F1"
            },
            {
              weight: 100,
              hex: "#B2DFDB"
            },
            {
              weight: 200,
              hex: "#80CBC4"
            },
            {
              weight: 300,
              hex: "#4DB6AC"
            },
            {
              weight: 400,
              hex: "#26A69A"
            },
            {
              weight: 500,
              hex: "#009688"
            },
            {
              weight: 600,
              hex: "#00897B"
            },
            {
              weight: 700,
              hex: "#00796B"
            },
            {
              weight: 800,
              hex: "#00695C"
            },
            {
              weight: 900,
              hex: "#004D40"
            }
          ]
        },
        {
          color: "Green",
          variations: [
            {
              weight: 50,
              hex: "#E8F5E9"
            },
            {
              weight: 100,
              hex: "#C8E6C9"
            },
            {
              weight: 200,
              hex: "#A5D6A7"
            },
            {
              weight: 300,
              hex: "#81C784"
            },
            {
              weight: 400,
              hex: "#66BB6A"
            },
            {
              weight: 500,
              hex: "#4CAF50"
            },
            {
              weight: 600,
              hex: "#43A047"
            },
            {
              weight: 700,
              hex: "#388E3C"
            },
            {
              weight: 800,
              hex: "#2E7D32"
            },
            {
              weight: 900,
              hex: "#1B5E20"
            }
          ]
        },
        {
          color: "Light Green",
          variations: [
            {
              weight: 50,
              hex: "#F1F8E9"
            },
            {
              weight: 100,
              hex: "#DCEDC8"
            },
            {
              weight: 200,
              hex: "#C5E1A5"
            },
            {
              weight: 300,
              hex: "#AED581"
            },
            {
              weight: 400,
              hex: "#9CCC65"
            },
            {
              weight: 500,
              hex: "#8BC34A"
            },
            {
              weight: 600,
              hex: "#7CB342"
            },
            {
              weight: 700,
              hex: "#689F38"
            },
            {
              weight: 800,
              hex: "#558B2F"
            },
            {
              weight: 900,
              hex: "#33691E"
            }
          ]
        },
        {
          color: "Lime",
          variations: [
            {
              weight: 50,
              hex: "#F9FBE7"
            },
            {
              weight: 100,
              hex: "#F0F4C3"
            },
            {
              weight: 200,
              hex: "#E6EE9C"
            },
            {
              weight: 300,
              hex: "#DCE775"
            },
            {
              weight: 400,
              hex: "#D4E157"
            },
            {
              weight: 500,
              hex: "#CDDC39"
            },
            {
              weight: 600,
              hex: "#C0CA33"
            },
            {
              weight: 700,
              hex: "#AFB42B"
            },
            {
              weight: 800,
              hex: "#9E9D24"
            },
            {
              weight: 900,
              hex: "#827717"
            }
          ]
        },
        {
          color: "Yellow",
          variations: [
            {
              weight: 50,
              hex: "#FFFDE7"
            },
            {
              weight: 100,
              hex: "#FFF9C4"
            },
            {
              weight: 200,
              hex: "#FFF59D"
            },
            {
              weight: 300,
              hex: "#FFF176"
            },
            {
              weight: 400,
              hex: "#FFEE58"
            },
            {
              weight: 500,
              hex: "#FFEB3B"
            },
            {
              weight: 600,
              hex: "#FDD835"
            },
            {
              weight: 700,
              hex: "#FBC02D"
            },
            {
              weight: 800,
              hex: "#F9A825"
            },
            {
              weight: 900,
              hex: "#F57F17"
            }
          ]
        },
        {
          color: "Amber",
          variations: [
            {
              weight: 50,
              hex: "#FFF8E1"
            },
            {
              weight: 100,
              hex: "#FFECB3"
            },
            {
              weight: 200,
              hex: "#FFE082"
            },
            {
              weight: 300,
              hex: "#FFD54F"
            },
            {
              weight: 400,
              hex: "#FFCA28"
            },
            {
              weight: 500,
              hex: "#FFC107"
            },
            {
              weight: 600,
              hex: "#FFB300"
            },
            {
              weight: 700,
              hex: "#FFA000"
            },
            {
              weight: 800,
              hex: "#FF8F00"
            },
            {
              weight: 900,
              hex: "#FF6F00"
            }
          ]
        },
        {
          color: "Orange",
          variations: [
            {
              weight: 50,
              hex: "#FFF3E0"
            },
            {
              weight: 100,
              hex: "#FFE0B2"
            },
            {
              weight: 200,
              hex: "#FFCC80"
            },
            {
              weight: 300,
              hex: "#FFB74D"
            },
            {
              weight: 400,
              hex: "#FFA726"
            },
            {
              weight: 500,
              hex: "#FF9800"
            },
            {
              weight: 600,
              hex: "#FB8C00"
            },
            {
              weight: 700,
              hex: "#F57C00"
            },
            {
              weight: 800,
              hex: "#EF6C00"
            },
            {
              weight: 900,
              hex: "#E65100"
            }
          ]
        },
        {
          color: "Deep Orange",
          variations: [
            {
              weight: 50,
              hex: "#FBE9E7"
            },
            {
              weight: 100,
              hex: "#FFCCBC"
            },
            {
              weight: 200,
              hex: "#FFAB91"
            },
            {
              weight: 300,
              hex: "#FF8A65"
            },
            {
              weight: 400,
              hex: "#FF7043"
            },
            {
              weight: 500,
              hex: "#FF5722"
            },
            {
              weight: 600,
              hex: "#F4511E"
            },
            {
              weight: 700,
              hex: "#E64A19"
            },
            {
              weight: 800,
              hex: "#D84315"
            },
            {
              weight: 900,
              hex: "#BF360C"
            }
          ]
        },
        {
          color: "Brown",
          variations: [
            {
              weight: 50,
              hex: "#EFEBE9"
            },
            {
              weight: 100,
              hex: "#D7CCC8"
            },
            {
              weight: 200,
              hex: "#BCAAA4"
            },
            {
              weight: 300,
              hex: "#A1887F"
            },
            {
              weight: 400,
              hex: "#8D6E63"
            },
            {
              weight: 500,
              hex: "#795548"
            },
            {
              weight: 600,
              hex: "#6D4C41"
            },
            {
              weight: 700,
              hex: "#5D4037"
            },
            {
              weight: 800,
              hex: "#4E342E"
            },
            {
              weight: 900,
              hex: "#3E2723"
            }
          ]
        },
        {
          color: "Grey",
          variations: [
            {
              weight: 50,
              hex: "#FAFAFA"
            },
            {
              weight: 100,
              hex: "#F5F5F5"
            },
            {
              weight: 200,
              hex: "#EEEEEE"
            },
            {
              weight: 300,
              hex: "#E0E0E0"
            },
            {
              weight: 400,
              hex: "#BDBDBD"
            },
            {
              weight: 500,
              hex: "#9E9E9E"
            },
            {
              weight: 600,
              hex: "#757575"
            },
            {
              weight: 700,
              hex: "#616161"
            },
            {
              weight: 800,
              hex: "#424242"
            },
            {
              weight: 900,
              hex: "#212121"
            }
          ]
        },
        {
          color: "Blue Grey",
          variations: [
            {
              weight: 50,
              hex: "#ECEFF1"
            },
            {
              weight: 100,
              hex: "#CFD8DC"
            },
            {
              weight: 200,
              hex: "#B0BEC5"
            },
            {
              weight: 300,
              hex: "#90A4AE"
            },
            {
              weight: 400,
              hex: "#78909C"
            },
            {
              weight: 500,
              hex: "#607D8B"
            },
            {
              weight: 600,
              hex: "#546E7A"
            },
            {
              weight: 700,
              hex: "#455A64"
            },
            {
              weight: 800,
              hex: "#37474F"
            },
            {
              weight: 900,
              hex: "#263238"
            }
          ]
        }]
    }
  }
}
