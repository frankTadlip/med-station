import { Meteor } from 'meteor/meteor';

export default (rootId) => {
    const rootNode = document.getElementById(rootId);
    if (rootNode) {
        return rootNode;
    }

    // Inline manual integration
    const e = document.createElement('script');
    const t = document.getElementsByTagName('script')[0];
    e.async = 1;
    e.charset = 'UTF-8';
    t.parentNode.insertBefore(e, t);


    const rootNodeHtml = '<div id="' + rootId + '"></div>';
    const body = document.getElementsByTagName('html')[0];
    body.insertAdjacentHTML('beforeend', rootNodeHtml);
    return document.getElementById(rootId);
};

