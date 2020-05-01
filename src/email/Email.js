const SmtpTransport = require("./StmpTransport");

class Email {

    constructor(transport = null) {
        this._from = "Queue redis <queue@queueredis.com.br>"
        this._to = null;
        this._name = null;
        this._subject = null;
        this._html = null;
        this._transport = transport || new SmtpTransport();
    }

    withTo(to) {
        this._to = to;
        return this;
    }

    withName(name) {
        this._name = name;
        return this;
    }

    withSubject(_subject) {
        this._subject = _subject;
        return this;
    }

    withHtml(html) {
        this._html = html;
        return this;
    }

    async send() {
        await this._transport.create().sendMail({
            from: this._from,
            to: `${this._name} <${this._to}>`,
            subject: this._subject,
            html: this._html 
        });
    }
}

module.exports = Email;