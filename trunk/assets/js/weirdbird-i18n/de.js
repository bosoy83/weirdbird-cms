Ext.define('WeirdbirdCMS.language.Definition', {
	
	// Navigation
	nav: {
		headline: 'navigieren zu:',
		dashboard: 'Dashboard',
		templates: 'Schablonen',
		structures: 'Rubriken',
		articles: 'Artikel',
		filemanager: 'Dateimanager',
		user: 'Benutzer',
		system: 'System'
	},

	// bottom bar
	bottom: {
		created: 'Erstellt 2012, 2013 von',
		moreinfo: 'F&uuml;r mehr Informationen besuchen Sie bitte die ',
		moreinfo2: 'google code Projektseite'
	},

	// Dashboard
	dashboard: {
		title: 'Dashboard',
		button: {},
		grid: {},
		form: {},
		message: {
			error: 'Das Dashboard konnte nicht geladen werden'
		}
	},

	// Templates
	templates: {
		title: 'Verf&uuml;gbare Schablonen f&uuml;r die Webseite',
		button: {
			import: 'Schablonen importieren',
			active: 'Schablone aktivieren'
		},
		grid: {
			active: 'Aktiv?',
			preview: 'Vorschau',
			description: 'Beschreibung'
		},
		form: {},
		message: {
			title: 'Schablonen wirklich importieren?',
			content: 'Wenn Sie fortfahren, werden alle Ihre Layout- und Modulzuordnungen verloren gehen. Wollen Sie wirklich alle Schablonen erneut importieren?',
			success: 'Schablonen wurden erfolgreich importiert. Vergessen Sie nicht, eine Schablone zu aktivieren.',
			error: '',
		},
		message2: {
			success: 'Die folgende Schablone wurde aktiviert:'
		}
	},

	// Structures
	structures: {
		title: 'Verwaltung von Rubriken und zugeh&ouml;rigen Layouts / Modulen',
		button: {
			add: 'Rubrik hinzuf&uuml;gen',
			remove: 'Rubrik l&ouml;schen'
		},
		grid: {
			title: 'Rubriken',
			active: 'Aktiv?',
			titleCol: 'Titel',
			description: 'Beschreibung',
			user: 'Benutzer'
		},
		form: {
			title: 'Auswahl von Layout und Modulen',
			layout: 'Layout',
			column: 'Abschnitt',
			module: 'Modul',
			emptyText: 'Layout w&auml;hlen...'
		},
		message: {
			title: 'Rubrik wirklich l&ouml;schen?',
			content: 'Wollen Sie wirklich die ausgew&auml;hlte Rubrik l&ouml;schen?',
			error: ''
		}
	},

	// Articles
	articles: {
		title: 'Verwaltung von Artikelzuordnungen / Artikeleingabe',
		button: {
			add: 'Artikel hinzuf&uuml;gen',
			save: 'Artikel speichern',
			delete: 'Artikel l&ouml;schen'
		},
		grid: {
			title: 'Auswahl von Rubrik / Abschnitt'
		},
		form: {
			title: 'Artikel bearbeiten',
			active: 'Aktiv',
			titleLable: 'Titel',
			description: 'Beschreibung',
			article: 'Artikel',
			image: 'Bild einsetzen',
			document: 'Generiere Link zu einem pdf Dokument'
		},
		message: {
			error: 'Der Artikel konnte nicht verschoben werden'
		},
		message2: {
			error: 'Der Artikel konnte nicht geladen werden'
		},
		message3: {
			success: 'Der Artikel wurde erfolgreich gespeichert.',
			error: 'Der Artikel konnte nicht gespeichert werden'
		},
		message4: {
			title: 'Artikel l&ouml;schen?',
			content: 'Wollen Sie wirklich den ausgew&auml;ten Artikel l&ouml;schen?',
			error: 'Der Artikel konnte nicht gel&ouml;scht werden'
		},
		message5: {
			error: 'Der neue Artikel konnte nicht erzeugt werden'
		},
		message6: {
			title: 'Hinweis',
			error: 'Es wurde kein Bild ausgew&auml;hlt.'
		},
		window: {
			title: 'Bild ausw&auml;hlen',
			select: 'Bild ausw&auml;hlen',
			cancel: 'Abbruch'
		},
		window2: {
			title: 'Dokument ausw&auml;hlen',
			select: 'Dokument ausw&auml;hlen',
			cancel: 'Abbruch',
			name: 'Dateiname',
			description: 'Beschreibung',
			link: 'pdf Datei'
		}
	},

	// File Manager
	filemanager: {
		title: 'Verwaltung von Bild- und Dokumentdateien (pdf)',
		button: {
			upload: 'Datei hochladen',
			delete: 'Datei l&ouml;schen'
		},
		grid: {
			active: 'Aktiv?',
			creation: 'Erstelldatum',
			user: 'Benutzer',
			name: 'Dateiname',
			type: 'Dateityp',
			description: 'Beschreibung',
			preview: 'Vorschau'
		},
		form: {
			
		},
		message: {
			title: 'Datei wirklich l&ouml;schen?',
			content: 'Wollen Sie die ausgew&auml;hlte Datei wirklich l&ouml;schen?',
			error: ''
		},
		window: {
			title: 'Datei hochladen',
			description: 'Beschreibung',
			file: 'Datei',
			emptyText: 'Auswahl einer Bild- oder Dokumentdatei...',
			save: 'Speichern',
			reset: 'Zur&uuml;cksetzen'
		},
		tpl: {
			openfile: 'Datei &ouml;ffnen'
		}
	},

	// User
	user: {
		title: 'Benutzerverwaltung',
		button: {
			add: 'Benutzer hinzuf&uuml;gen',
			delete: 'Benutzer l&ouml;schen',
			reset: 'Passwort zur&uuml;cksetzen',
			waitMsg: 'F&uuml;ge neuen Benutzer hinzu und versende Best&auml;tigunsmail...'
		},
		grid: {
			name: 'Name',
			email: 'Email',
			logins: 'Logins',
			lastlogin: 'Letzter Login'
		},
		form: {},
		message: {
			title: 'Benutzer wirklich l&ouml;schen?',
			content: 'M&ouml;chten Sie wirklich den ausgew&auml;hlten Benutzer l&ouml;schen?',
			error: ''
		},
		window: {
			title: 'Neuen Benutzer hinzuf&uuml;gen',
			name: 'Name',
			email: 'Email',
			save: 'Speichern',
			reset: 'Zur&uuml;cksetzen'
		}
	},

	// System
	system: {
		title: 'Verwaltung der Systemeinstellungen',
		button: {
			save: 'Einstellungen speichern'
		},
		grid: {},
		form: {
			title: 'Systemweite Einstellungen',
			contactemail: 'Kontakt-Emailadresse',
			language: 'Sprache',
			emptyText: 'Auswahl der Sprache...'
		},
		form2: {
			title: 'System revision'
		},
		message: {
			success1: 'Die Systemeinstellungen wurden erfolgreich gespeichert.',
			success2: 'Bitte beachten Sie, dass sich eine &Auml;nderunge der Sprache erst bei einem erneuten Login auswirkt.',
			error: 'Die Systemeinstellungen konnten nicht gespeichert werden'
		},
		message2: {
			waitMsg: 'Hole aktuelle Revisionsdaten von code.google.com ...',
			success: 'Ihre Installation von weirdbird cms ist auf dem neuesten Stand.',
			error: 'Die Systemeinstellungen konnten nicht geladen werden',
			error2: 'Ihre Installation von weirdbird cms ist nicht auf dem neuesten Stand.',
			error3: 'Bitte besuchen Sie die',
			error4: 'google-code Seite',
			error5: 'f&uuml;r weiterf&uuml;hrende Details.',
			error6: 'Installierte Revision :',
			error7: 'Letzte gefundene Revision :'
		}
	}
});