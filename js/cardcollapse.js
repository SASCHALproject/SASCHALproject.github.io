function card_collapse_print(caption = "",
    id = "",
    idParent = "",
    isshow = false,
    link = "#") {
    if (!link || 0 === link.length || link === "#") {
        link = '';
    }
    else {
        link = '<div class="blockCode">' +
            '       <script src="' + link + '"></script>' +
            '   </div>';
    }
    if (isshow) {
        isshow = 'show';
    }
    else {
        isshow = '';
    }
    document.write('<div class="card">' +
        '    <div class="card-header" id="heading' + id + '">' +
        '        <h5 class="mb-0">' +
        '            <button class="btn btn-link"' +
        '                data-toggle="collapse"' +
        '                data-target="#collapse' + id + '"' +
        '                aria-expanded="true" aria-controls="collapse' + id + '">' +
        '                   ' + caption +
        '            </button>' +
        '        </h5>' +
        '    </div>' +

        '    <div id="collapse' + id + '"' +
        '        class="collapse ' + isshow + '"' +
        '        aria-labelledby="heading' + id + '"' +
        '        data-parent="#accordion' + idParent + '">' +
        '        <div class="card-body">' +
        '            ' + link +
        '        </div>' +
        '    </div>' +
        '</div>');
}