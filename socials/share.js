var shareButton = document.getElementById('share-button');

shareButton.addEventListener('click', function () {
    var filesArray = document.getElementById('share-files').files
    var shareData = { files: filesArray };

    if (navigator.canShare && navigator.canShare(shareData)) {

    // Adding title afterwards as navigator.canShare just
    // takes files as input
    shareData.title = "Bits and pieces"

    navigator.share(shareData)
    .then(() => console.log('Share was successful.'))
    .catch((error) => console.log('Sharing failed', error));

    } else {
    console.log("Your system doesn't support sharing files.");
    }
})

var url = "http://google.com";
var title = "Replace this with a title.";
var text = "Replace this with your share copy.";
window.open('http://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(url), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');