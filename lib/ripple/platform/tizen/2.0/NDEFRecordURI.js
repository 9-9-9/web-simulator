/*
 *  Copyright 2013 Intel Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var t = require('ripple/platform/tizen/2.0/typecast'),
    NDEFRecordInternal = require('ripple/platform/tizen/2.0/NDEFRecordInternal'),
    NDEFRecordURI;

NDEFRecordURI = function (uri) {
    var payload = [], i;

    t.NDEFRecordURI(arguments, this);

    // Store uri in payload
    payload.push(0);
    for (i = 0; i < uri.length; i++) {
        payload.push(uri.charCodeAt(i));
    }

    NDEFRecordInternal.call(this, tizen.nfc.NFC_RECORD_TNF_WELL_KNOWN,
            ["U".charCodeAt(0)], payload, []);

    this.__defineGetter__("uri", function () {
        return uri;
    });
};

module.exports = NDEFRecordURI;
