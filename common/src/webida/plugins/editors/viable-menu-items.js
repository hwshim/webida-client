/*
* Copyright (c) 2012-2015 S-Core Co., Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// @formatter:off
define([
    './menu-items', 
    'webida-lib/util/logger/logger-client'
], function (
    menuItems, 
    Logger
) {
    'use strict';
// @formatter:on

    var logger = new Logger();
    //logger.setConfig('level', Logger.LEVELS.log);
    logger.off();

    function _getPartRegistry() {
        var workbench = require('webida-lib/plugins/workbench/plugin');
        var page = workbench.getCurrentPage();
        return page.getPartRegistry();
    }

    /**
     * @param {string} section 'File', 'Edit', 'Find', 'Navigate', 'View' ...
     * @return {(Thenable|Object)}
     */
    function _getMenuItems(section) {
        var part = _getPartRegistry().getCurrentEditorPart();
        if (part) {
            return part.getMenuItems(section, menuItems);
        } else {
            return null;
        }
    }

    function getItemsUnderFile() {
        return _getMenuItems('File');
    }

    function getItemsUnderEdit() {
        return _getMenuItems('Edit');
    }

    function getItemsUnderFind() {
        return _getMenuItems('Find');
    }

    function getItemsUnderNavigate() {
        return _getMenuItems('Navigate');
    }

    function getItemsUnderView() {
        return _getMenuItems('View');
    }

    function getContextMenuItems() {
        var part = _getPartRegistry().getCurrentEditorPart();
        if (part) {
            return part.getContextMenuItems(menuItems);
        } else {
            return null;
        }
    }

    return {
        getItemsUnderFile: getItemsUnderFile,
        getItemsUnderEdit: getItemsUnderEdit,
        getItemsUnderFind: getItemsUnderFind,
        getItemsUnderNavigate: getItemsUnderNavigate,
        getItemsUnderView: getItemsUnderView,
        getContextMenuItems: getContextMenuItems
    };
});
