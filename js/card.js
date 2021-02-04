function card_print(caption = "",
    text = "",
    section = "",
    image = "") {
    if (!image || 0 === image.length) {
        image = '';
    }
    else {
        image = '<img src="images/' + image + '.png" class="img-thumbnail img-card" alt="' + caption + '" />';
    }
    document.write('<div class="card bg-dark text-white border-light m-2" style="width: 18rem;">' +
        '    ' + image +
        '    <div class="card-body">' +
        '        <h4 class="card-title text-center">' + caption + '</h4>' +
        '        <p class="card-text text-info">' +
        '            ' + text +
        '        </p>' +
        '        <div class="text-center">' +
        '            <a href="#" class="btn btn-info">Открыть</a>' +
        '        </div>' +
        '        <div class="text-right mt-3">' +
        '            <small class="text-muted">' +
        '                <footer class="blockquote-footer">Раздел' +
        '                                <cite title="Название источника">' + section + '</cite>' +
        '                </footer>' +
        '            </small>' +
        '        </div>' +
        '    </div>' +
        '</div>');
}