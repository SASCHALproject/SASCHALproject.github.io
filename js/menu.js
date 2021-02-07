function menu_print(isroot = false) {
    if (isroot) {
        isroot = '';
    }
    else {
        isroot = '../../';
    }
    document.write('<nav class="navbar navbar-expand-lg navbar-dark bg-primary">' +

        '        <a class="navbar-brand" href="' + isroot + '">SASCHAL©</a>' +
        '        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"' +
        '            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">' +
        '            <span class="navbar-toggler-icon"></span>' +
        '        </button>' +

        '        <div class="btn-group nav nav-pills nav-justified" role="group" aria-label="Button group with nested dropdown">' +

        //'            <button type="button" class="btn btn-primary nav-item">Главная</button>' +

        '            <div class="btn-group nav-item" role="group">' +
        '                <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"' +
        '                    aria-haspopup="true" aria-expanded="false">' +
        '                    VBA' +
        '                </button>' +
        '                <div class="dropdown-menu bg-primary" aria-labelledby="btnGroupDrop1">' +
        '                    <button type="button" class="btn btn-primary btn-block nav-item text-left"' +
        '                        onclick="location.href = &apos;' + isroot + 'pages/VBAGeneral/VBAGeneral.html&apos;;">VBA&nbsp;Общее</button>' +
        '                    <div class="dropdown-divider"></div>' +
        '                    <button type="button" class="btn btn-primary btn-block nav-item text-left"' +
        '                        onclick="location.href = &apos;' + isroot + 'pages/VBAAccess/VBAAccess.html&apos;;">VBA&nbsp;Access</button>' +
        '                    <button type="button" class="btn btn-primary btn-block nav-item text-left"' +
        '                        onclick="location.href = &apos;' + isroot + 'pages/VBAExcel/VBAExcel.html&apos;;">VBA&nbsp;Excel</button>' +
        '                    <button type="button" class="btn btn-primary btn-block nav-item text-left"' +
        '                        onclick="location.href = &apos;' + isroot + 'pages/VBAWord/VBAWord.html&apos;;">VBA&nbsp;Word</button>' +
        '                </div>' +
        '            </div>' +

        '            <button type="button" class="btn btn-primary nav-item"' +
        '                onclick="location.href = &apos;' + isroot + 'pages/VBNET/VBNET.html&apos;;">VB.NET</button>' +

        '            <button type="button" class="btn btn-primary nav-item"' +
        '                onclick="location.href = &apos;' + isroot + 'pages/MSSQL/MSSQL.html&apos;;">MS&nbsp;SQL</button>' +

        '            <button type="button" class="btn btn-primary nav-item"' +
        '                onclick="location.href = &apos;' + isroot + 'pages/QlikSense/QlikSense.html&apos;;">Qlik&nbsp;Sense</button>' +

        '        </div>' +

        '    </nav>');
}