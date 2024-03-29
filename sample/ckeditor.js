import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';

import CustomColorPlugin from '../src/customcolorplugin';

/* global document, window */

ClassicEditor.create(document.querySelector('#editor'), {
	plugins: [
		// `MyPlugin` is an example plugin generated by the package generator.
		CustomColorPlugin,
		Essentials,
		Autoformat,
		BlockQuote,
		Bold,
		Heading,
		FontColor,
		Image,
		ImageCaption,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		Indent,
		Italic,
		Link,
		List,
		MediaEmbed,
		Paragraph,
		Table,
		TableToolbar,
		CodeBlock,
		Code,
		Base64UploadAdapter,
	],
	toolbar: [
		// `myButton` is an example button provided by the `MyPlugin` class.
		'myButton',
		'|',
		'heading',
		'|',
		'fontColor',
		'|',
		'bold',
		'italic',
		'link',
		'code',
		'bulletedList',
		'numberedList',
		'|',
		'outdent',
		'indent',
		'|',
		'uploadImage',
		'blockQuote',
		'insertTable',
		'mediaEmbed',
		'codeBlock',
		'|',
		'undo',
		'redo',
	],
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'imageTextAlternative',
		],
	},
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
	},
	heading: {
		options: [
			{
				model: 'paragraph',
				title: 'Paragraph',
				class: 'ck-heading_paragraph',
			},
			{
				model: 'h6',
				view: 'h6',
				title: 'Heading 6',
				class: 'ck-heading_heading1',
			},
			{
				model: 'heading7',
				view: 'h7',
				title: 'Heading 7',
				class: 'ck-heading_heading7',
			},
			{
				model: 'heading8',
				view: 'h8',
				title: 'Heading 8',
				class: 'ck-heading_heading8',
			},
			{
				model: 'note',
				view: 'note',
				title: 'Note',
				class: 'ck-heading_note',
			},
			{
				model: 'customcaption',
				view: 'customcaption',
				title: 'Caption',
				class: 'ck-heading_customcaption',
			},
		],
	},
	fontColor: {
		colors: [
			{
				class: 'text-primaryBlue',
				color: 'hsl(218, 35%, 26%)',
				label: 'Primary Blue',
			},
			{
				color: 'hsl(213, 50%, 38%)',
				label: 'Secondary Blue',
			},
			{
				color: 'hsl(202, 100%, 51%)',
				label: 'Light Blue 1',
			},
			{
				color: 'hsl(202, 100%, 58%)',
				label: 'Light Blue 2',
			},
			{
				color: 'hsl(202, 99%, 68%)',
				label: 'Light Blue 3',
			},
			{
				color: 'hsl(202, 91%, 79%)',
				label: 'Light Blue 4',
			},
			{
				color: 'hsl(201, 100%, 86%)',
				label: 'Light Blue 5',
			},
			{
				color: 'hsl(202, 100%, 91%)',
				label: 'Light Blue 6',
			},
		],
	},
	customFontColor: {
		'hsl(218, 35%, 26%)': 'text-primaryBlue',
		'hsl(213, 50%, 38%)': 'text-secondaryBlue',
		'hsl(202, 100%, 51%)': 'text-lightBlue1',
		'hsl(202, 100%, 58%)': 'text-lightBlue2',
		'hsl(202, 99%, 68%)': 'text-lightBlue3',
		'hsl(202, 91%, 79%)': 'text-lightBlue4',
		'hsl(201, 100%, 86%)': 'text-lightBlue5',
		'hsl(202, 100%, 91%)': 'text-lightBlue6',
	},
})
	.then((editor) => {
		window.editor = editor;
		CKEditorInspector.attach(editor);
		window.console.log('CKEditor 5 is ready.', editor);
	})
	.catch((err) => {
		window.console.error(err.stack);
	});
