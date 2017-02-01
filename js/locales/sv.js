/*!
 * FileInput Swedish Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function ($) {
    "use strict";

    $.fn.fileinputLocales['_LANG_'] = {
        fileSingle: 'fil',
        filePlural: 'filer',
        browseLabel: 'Bläddra;',
        removeLabel: 'Ta bort',
        removeTitle: 'Ta bort valda filer',
        cancelLabel: 'Avbryt',
        cancelTitle: 'Avbryt pågående uppladdning',
        uploadLabel: 'Ladda upp',
        uploadTitle: 'Ladda upp valda filer',
        msgNo: 'Nej',
        msgNoFilesSelected: 'Inga filer valda',
        msgCancelled: 'Avbruten',
        msgZoomModalHeading: 'Detaljerad Förhandsgranskning',
        msgSizeTooSmall: 'Filen "{name}" (<b>{size} KB</b>) är för liten och måste va störren än <b>{minSize} KB</b>.',
        msgSizeTooLarge: 'Filen "{name}" (<b>{size} KB</b>) överskrider maximal tillåten uppladdningsstorlek <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'Du måste välja minst <b>{n}</b> {files} att ladda upp.',
        msgFilesTooMany: 'Antalet filer valda för uppladdning <b>({n})</b> överskrider maximalt tillåtet antal <b>{m}</b>.',
        msgFileNotFound: 'Filen "{name}" hittades inte!',
        msgFileSecured: 'Säkerhetsrestriktioner hindrade läsning av filen. "{name}".',
        msgFileNotReadable: 'Filen "{name}" är inte läsbar.',
        msgFilePreviewAborted: 'Filförhandsgranskning avbruten av "{name}".',
        msgFilePreviewError: 'Ett fel inträffade under läsning av "{name}".',
        msgInvalidFileName: 'Ogiltiga eller icke stödda tecken i filnamnet "{name}".',
        msgInvalidFileType: 'Ogiltig typ för filen "{name}". Endast "{types}"-filer stödjs.',
        msgInvalidFileExtension: 'Ogiltig filändelse för filen "{name}". Endast "{extensions}"-filer stödjs.',
        msgFileTypes: {
            'image': 'image',
            'html': 'HTML',
            'text': 'text',
            'video': 'video',
            'audio': 'audio',
            'flash': 'flash',
            'pdf': 'PDF',
            'object': 'object'
        },
        msgUploadAborted: 'Filuppladdningen avbröts',
        msgUploadThreshold: 'Processar...',
        msgUploadEmpty: 'Ingen giltig data tillgänglig för uppladdnig.',
        msgValidationError: 'Valideringsfel',
        msgLoading: 'Laddar fil {index} av {files} &hellip;',
        msgProgress: 'Laddar fil {index} av {files} - {name} - {percent}% klart.',
        msgSelected: '{n} {files} vald',
        msgFoldersNotAllowed: 'Endast dra & släpp filer! hoppade över{n} släppta mappar(s).',
        msgImageWidthSmall: 'Bildens bredd "{name}" måste vara minst {size} pixlar.',
        msgImageHeightSmall: 'Bildens höjd "{name}" måste vara minst {size} pixlar.',
        msgImageWidthLarge: 'Bildens bredd "{name}" kan inte överstiga {size} pixlar.',
        msgImageHeightLarge: 'Bildens höjd "{name}" kan inte överstiga {size} pixlar.',
        msgImageResizeError: 'Kan inte ändra bildens storlek.',
        msgImageResizeException: 'Fel vid ändring av bildens storleke.<pre>{errors}</pre>',
        dropZoneTitle: 'Dra & släpp filer här &hellip;',
        dropZoneClickTitle: '<br>(eller klicka för att välja {files})',
        fileActionSettings: {
            removeTitle: 'Ta bort fil',
            uploadTitle: 'Ladda upp fil',
            zoomTitle: 'Detaljer',
            dragTitle: 'Flytta',
            indicatorNewTitle: 'Inte uppladdad än',
            indicatorSuccessTitle: 'Upladdad',
            indicatorErrorTitle: 'Upladdningsfel',
            indicatorLoadingTitle: 'Laddar upp ...'
        },
        previewZoomButtonTitles: {
            prev: 'Visa tidigare fil',
            next: 'Visa nästa fil',
            toggleheader: 'Header',
            fullscreen: 'Fullskärm',
            borderless: 'Ingen ram',
            close: 'Stäng detaljvyn'
        }
    };
})(window.jQuery);
