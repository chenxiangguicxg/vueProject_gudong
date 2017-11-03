/**
 * 跨浏览器的事件处理程序
 * @type {Object}
 */
var EventUtil = {
    /**
     * 添加事件处理程序
     * @param {[type]} element 要操作的元素
     * @param {[type]} type    事件名称
     * @param {[type]} handler 事件处理程序函数
     */
    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },

    /**
     * 移除事件处理程序
     * @param {[type]} element 要操作的元素
     * @param {[type]} type    事件名称
     * @param {[type]} handler 事件处理程序函数
     */
    removeHandler: function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },

    /**
     * 获取事件对象(因IE中 event参数未定，需要做兼容)
     * @param  {[type]} event 事件对象
     * @return {[type]}       [description]
     */
        getEvent: function(event) {
        return event ? event : window.event;
    },

    /**
     * 获取事件实际目标
     * @param  {[type]} event 事件对象
     * @return {[type]}       [description]
     */
        getTarget: function(event) {
        return event.target || event.srcElement;
    },

    /**
     * 组织事件默认行为
     * @param  {[type]} event 事件对象
     * @return {[type]}       [description]
     */
        preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    /**
     * 组织事件冒泡
     * @param  {[type]} event 事件对象
     * @return {[type]}       [description]
     */
        stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    /**
     * 获取相关元素，这个属性只对 mouseover 和 mouseout事件有效
     * @param  {[type]} event 事件对象
     * @return {[type]}       [description]
     */
        getRelatedTarget: function(event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        } else {
            return null;
        }
    },

    /**
     * 获取按钮的信息，返回的0表示按了鼠标的左键，返回1按了中间键，返回2按了鼠标右键
     * @param  {[type]} event 事件对象
     * @return {[type]}       [description]
     */
        getButton: function(event) {
        if (document.implementation.hasFeature('mouseEvents', '2.0')) {
            return event.button;
        } else {
            switch (event.button) {
                case 0:
                case 1:
                case 2:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },

    /**
     * 获取字符编码
     * @param  {[type]} event 事件对象
     * @return {[type]}       [description]
     */
    getCharCode: function(event){
        if (typeof event.charCode == "number"){
            return event.charCode;
        } else {
            return event.keyCode;
        }
    }
};

export default EventUtil
