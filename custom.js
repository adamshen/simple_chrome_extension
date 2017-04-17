function deleteElementById(id) {
    var element = document.getElementById(id)
    if (element && element.parentElement) {
        element.parentElement.removeChild(element)
    }
}

function deleteElementByClass(className) {
    var elements = document.getElementsByClassName(className)
    Array.from(elements).forEach(function (element) {
        element.parentElement.removeChild(element)
    })
}

deleteElementById('head')
deleteElementById('com_userbar')
deleteElementById('aside')
deleteElementById('thread_top_folder')
deleteElementByClass('header')
