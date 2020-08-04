import React from 'react';
import * as Icons from '../../Icons';
import { StyledIcon } from './Icon.style';
import { ElementProps } from '../../types/utils/ElementProps';

export const IconsMap = {
    arrowsVertical: 'arrowsVertical',
    arrowUp: 'arrowUp',
    arrowDoubleUp: 'arrowDoubleUp',
    arrowRight: 'arrowRight',
    arrowDoubleRight: 'arrowDoubleRight',
    arrowDown: 'arrowDown',
    arrowDoubleDown: 'arrowDoubleDown',
    arrowLeft: 'arrowLeft',
    arrowDoubleLeft: 'arrowDoubleLeft',
    hamburger: 'hamburger',
    loading: 'loading',
    edit: 'edit',
    copy: 'copy',
    check: 'check',
    checkSimple: 'checkSimple',
    users: 'users',
    user: 'user',
    upload: 'upload',
    download: 'download',
    trash: 'trash',
    search: 'search',
    table: 'table',
    plus: 'plus',
    logout: 'logout',
    license: 'license',
    key: 'key',
    info: 'info',
    import: 'import',
    export: 'export',
    eye: 'eye',
    eyeSlash: 'eyeSlash',
    close: 'close',
    clear: 'clear',
    enter: 'enter',
    error: 'error',
    warning: 'warning',
    checkCircle: 'checkCircle',
    calendar: 'calendar',
    calendarAlt: 'calendarAlt',
    question: 'question',
    profile: 'profile',
    zoom: 'zoom',
    home: 'home',
    bookmarks: 'bookmarks',
    tags: 'tags',
    star: 'star',
    note: 'note',
    monitor: 'monitor',
    list: 'list',
    listAlt: 'listAlt',
    history: 'history',
    folder: 'folder',
    file: 'file',
    fileAlt: 'fileAlt',
    comment: 'comment',
    calculator: 'calculator',
    book: 'book',
    bookOpened: 'bookOpened',
    citex: 'citex',
    zoomIn: 'zoomIn',
    play: 'play',
    flagParagraph: 'flagParagraph',
    flagCzech: 'flagCzech',
    flagComments: 'flagComments',
    flagEU: 'flagEU',
    flagLawCzech: 'flagLawCzech',
    flagLawEU: 'flagLawEU',
    flagLiterature: 'flagLiterature',
    flagSlovakia: 'flagSlovakia',
    threeDots: 'threeDots',
    filter: 'filter',
    diff: 'diff',
    news: 'news',
    folderOpen: 'folderOpen',
    fileCsv: 'fileCsv',
    fileDoc: 'fileDoc',
    fileJpg: 'fileJpg',
    filePdf: 'filePdf',
    filePng: 'filePng',
    filePpt: 'filePpt',
    fileRtf: 'fileRtf',
    fileTxt: 'fileTxt',
    fileXls: 'fileXls',
    fileXml: 'fileXml',
    fileZip: 'fileZip',
    virus: 'virus',
    facebook: 'facebook',
    google: 'google',
    fileWithoutContent: 'fileWithoutContent',
    notification: 'notification',
    creditCard: 'creditCard',
    attachment: 'attachment',
    inProgress: 'inProgress',
    phone: 'phone',
    video: 'video',
    crossedPhone: 'crossedPhone',
    crossedCamera: 'crossedCamera',
    microphone: 'microphone',
    crossedMicrophone: 'crossedMicrophone',
    emoji: 'emoji',
    facebookFilled: 'facebookFilled',
    envelope: 'envelope',
    login: 'login',
    plusSquare: 'plusSquare',
    send: 'send',
    cog: 'cog',
    hash: 'hash',
    robot: 'robot',
    switchIcon: 'switch',
    userAdd: 'userAdd',
    building: 'building',
    offer: 'offer',
    prev: 'prev',
    next: 'next',
    external: 'external',
    change: 'change',
    print: 'print',
    squaresGrid: 'squaresGrid',
    tag: 'tag',
    timeline: 'timeline',
    brush: 'brush',
    fontSize: 'fontSize',
    transformation: 'transformation',
    copyFilled: 'copyFilled',
    messageBubble: 'messageBubble',
    layers: 'layers',
    pencil: 'pencil',
    signout: 'signout',
};

export type IconName = keyof typeof IconsMap;

export interface IconProps extends ElementProps<HTMLElement> {
    name: IconName;
    isRotating?: boolean;
}

export const Icon: React.FC<IconProps> = ({
    name,
    isRotating,
    ...IProps
}): React.ReactElement => {
    let Component = <i {...IProps} />;

    switch (name) {
        case 'arrowsVertical':
            Component = <Icons.ArrowsVertical />;
            break;
        case 'arrowUp':
            Component = <Icons.ArrowUp />;
            break;
        case 'arrowDoubleUp':
            Component = <Icons.ArrowDoubleUp />;
            break;
        case 'arrowRight':
            Component = <Icons.ArrowRight />;
            break;
        case 'arrowDoubleRight':
            Component = <Icons.ArrowDoubleRight />;
            break;
        case 'arrowDown':
            Component = <Icons.ArrowDown />;
            break;
        case 'arrowDoubleDown':
            Component = <Icons.ArrowDoubleDown />;
            break;
        case 'arrowLeft':
            Component = <Icons.ArrowLeft />;
            break;
        case 'arrowDoubleLeft':
            Component = <Icons.ArrowDoubleLeft />;
            break;
        case 'hamburger':
            Component = <Icons.Hamburger />;
            break;
        case 'loading':
            Component = <Icons.Loading />;
            break;
        case 'edit':
            Component = <Icons.Edit />;
            break;
        case 'copy':
            Component = <Icons.Copy />;
            break;
        case 'check':
            Component = <Icons.Check />;
            break;
        case 'checkSimple':
            Component = <Icons.CheckSimple />;
            break;
        case 'clear':
            Component = <Icons.Clear />;
            break;
        case 'close':
            Component = <Icons.Close />;
            break;
        case 'export':
            Component = <Icons.Export />;
            break;
        case 'eye':
            Component = <Icons.Eye />;
            break;
        case 'eyeSlash':
            Component = <Icons.EyeSlash />;
            break;
        case 'import':
            Component = <Icons.Import />;
            break;
        case 'info':
            Component = <Icons.Info />;
            break;
        case 'key':
            Component = <Icons.Key />;
            break;
        case 'license':
            Component = <Icons.License />;
            break;
        case 'logout':
            Component = <Icons.Logout />;
            break;
        case 'plus':
            Component = <Icons.Plus />;
            break;
        case 'search':
            Component = <Icons.Search />;
            break;
        case 'table':
            Component = <Icons.Table />;
            break;
        case 'trash':
            Component = <Icons.Trash />;
            break;
        case 'upload':
            Component = <Icons.Upload />;
            break;
        case 'download':
            Component = <Icons.Download />;
            break;
        case 'user':
            Component = <Icons.User />;
            break;
        case 'users':
            Component = <Icons.Users />;
            break;
        case 'enter':
            Component = <Icons.Enter />;
            break;
        case 'error':
            Component = <Icons.Error />;
            break;
        case 'warning':
            Component = <Icons.Warning />;
            break;
        case 'checkCircle':
            Component = <Icons.CheckCircle />;
            break;
        case 'calendar':
            Component = <Icons.Calendar />;
            break;
        case 'calendarAlt':
            Component = <Icons.CalendarAlt />;
            break;
        case 'question':
            Component = <Icons.Question />;
            break;
        case 'profile':
            Component = <Icons.Profile />;
            break;
        case 'zoom':
            Component = <Icons.Zoom />;
            break;
        case 'home':
            Component = <Icons.Home />;
            break;
        case 'bookmarks':
            Component = <Icons.Bookmarks />;
            break;
        case 'tags':
            Component = <Icons.Tags />;
            break;
        case 'star':
            Component = <Icons.Star />;
            break;
        case 'note':
            Component = <Icons.Note />;
            break;
        case 'monitor':
            Component = <Icons.Monitor />;
            break;
        case 'list':
            Component = <Icons.List />;
            break;
        case 'listAlt':
            Component = <Icons.ListAlt />;
            break;
        case 'history':
            Component = <Icons.History />;
            break;
        case 'folder':
            Component = <Icons.Folder />;
            break;
        case 'file':
            Component = <Icons.File />;
            break;
        case 'fileAlt':
            Component = <Icons.FileAlt />;
            break;
        case 'comment':
            Component = <Icons.Comment />;
            break;
        case 'calculator':
            Component = <Icons.Calculator />;
            break;
        case 'book':
            Component = <Icons.Book />;
            break;
        case 'bookOpened':
            Component = <Icons.BookOpened />;
            break;
        case 'citex':
            Component = <Icons.Citex />;
            break;
        case 'play':
            Component = <Icons.Play />;
            break;
        case 'zoomIn':
            Component = <Icons.ZoomIn />;
            break;
        case 'flagParagraph':
            Component = <Icons.FlagParagraph />;
            break;
        case 'flagCzech':
            Component = <Icons.FlagCzech />;
            break;
        case 'flagComments':
            Component = <Icons.FlagComments />;
            break;
        case 'flagEU':
            Component = <Icons.FlagEU />;
            break;
        case 'flagLawCzech':
            Component = <Icons.FlagLawCzech />;
            break;
        case 'flagLawEU':
            Component = <Icons.FlagLawEU />;
            break;
        case 'flagLiterature':
            Component = <Icons.FlagLiterature />;
            break;
        case 'flagSlovakia':
            Component = <Icons.FlagSlovakia />;
            break;
        case 'threeDots':
            Component = <Icons.ThreeDots />;
            break;
        case 'filter':
            Component = <Icons.Filter />;
            break;
        case 'diff':
            Component = <Icons.Diff />;
            break;
        case 'news':
            Component = <Icons.News />;
            break;
        case 'folderOpen':
            Component = <Icons.FolderOpen />;
            break;
        case 'fileCsv':
            Component = <Icons.FileCsv />;
            break;
        case 'fileDoc':
            Component = <Icons.FileDoc />;
            break;
        case 'fileJpg':
            Component = <Icons.FileJpg />;
            break;
        case 'filePdf':
            Component = <Icons.FilePdf />;
            break;
        case 'filePng':
            Component = <Icons.FilePng />;
            break;
        case 'filePpt':
            Component = <Icons.FilePpt />;
            break;
        case 'fileRtf':
            Component = <Icons.FileRtf />;
            break;
        case 'fileTxt':
            Component = <Icons.FileTxt />;
            break;
        case 'fileXls':
            Component = <Icons.FileXls />;
            break;
        case 'fileXml':
            Component = <Icons.FileXml />;
            break;
        case 'fileZip':
            Component = <Icons.FileZip />;
            break;
        case 'virus':
            Component = <Icons.Virus />;
            break;
        case 'facebook':
            Component = <Icons.Facebook />;
            break;
        case 'google':
            Component = <Icons.Google />;
            break;
        case 'fileWithoutContent':
            Component = <Icons.FileWithoutContent />;
            break;
        case 'notification':
            Component = <Icons.Notification />;
            break;
        case 'creditCard':
            Component = <Icons.CreditCard />;
            break;
        case 'attachment':
            Component = <Icons.Attachment />;
            break;
        case 'inProgress':
            Component = <Icons.InProgress />;
            break;
        case 'phone':
            Component = <Icons.Phone />;
            break;
        case 'video':
            Component = <Icons.Video />;
            break;
        case 'crossedPhone':
            Component = <Icons.CrossedPhone />;
            break;
        case 'crossedCamera':
            Component = <Icons.CrossedCamera />;
            break;
        case 'microphone':
            Component = <Icons.Microphone />;
            break;
        case 'crossedMicrophone':
            Component = <Icons.CrossedMicrophone />;
            break;
        case 'emoji':
            Component = <Icons.Emoji />;
            break;
        case 'facebookFilled':
            Component = <Icons.FacebookFilled />;
            break;
        case 'envelope':
            Component = <Icons.Envelope />;
            break;
        case 'login':
            Component = <Icons.Login />;
            break;
        case 'plusSquare':
            Component = <Icons.PlusSquare />;
            break;
        case 'send':
            Component = <Icons.Send />;
            break;
        case 'cog':
            Component = <Icons.Cog />;
            break;
        case 'hash':
            Component = <Icons.Hash />;
            break;
        case 'robot':
            Component = <Icons.Robot />;
            break;
        case 'userAdd':
            Component = <Icons.UserAdd />;
            break;
        case 'building':
            Component = <Icons.Building />;
            break;
        case 'offer':
            Component = <Icons.Offer />;
            break;
        case 'prev':
            Component = <Icons.Prev />;
            break;
        case 'next':
            Component = <Icons.Next />;
            break;
        case 'external':
            Component = <Icons.External />;
            break;
        case 'change':
            Component = <Icons.Change />;
            break;
        case 'print':
            Component = <Icons.Print />;
            break;
        case 'squaresGrid':
            Component = <Icons.SquaresGrid />;
            break;
        case 'tag':
            Component = <Icons.Tag />;
            break;
        case 'timeline':
            Component = <Icons.Timeline />;
            break;
        case 'brush':
            Component = <Icons.Brush />;
            break;
        case 'fontSize':
            Component = <Icons.FontSize />;
            break;
        case 'transformation':
            Component = <Icons.Transformation />;
            break;
        case 'copyFilled':
            Component = <Icons.CopyFilled />;
            break;
        case 'messageBubble':
            Component = <Icons.MessageBubble />;
            break;
        case 'layers':
            Component = <Icons.Layers />;
            break;
        case 'pencil':
            Component = <Icons.Pencil />;
            break;
        case 'signout':
            Component = <Icons.Signout />;
            break;
    }

    return (
        <StyledIcon isRotating={isRotating} name={name} {...IProps}>
            {Component}
        </StyledIcon>
    );
};

export type Icon = typeof Icon;
