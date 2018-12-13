var diary = [];

document.addEventListener('DOMContentLoaded', function () {
    var submit = document.getElementById('submit');
    var viewApp = document.getElementById('viewApp');
    var totalData;
    chrome.storage.sync.get(['DIARY_DATA'], function (result) {
        diary = JSON.stringify(result.DIARY_DATA);
    });
    // onClick's logic below:
    submit.addEventListener('click', function () {
        var title = document.getElementById('title').value;
        var description = document.getElementById('description').value;
        if (typeof diary === 'string') {
            totalData = JSON.parse(diary) || [];
            if (diary.length > 0) {
                let data = {
                    "DATE": new Date().getTime(),
                    "TITLE": title,
                    "DESCRIPTION": description
                }
                totalData.push(data);
                chrome.storage.sync.set({ 'DIARY_DATA': totalData }, function () {
                    alert('Success! saved your dairy');
                });
            }
            else {
                var diaryDetails = [];
                let data = {
                    "DATE": new Date().getTime(),
                    "TITLE": title,
                    "DESCRIPTION": description
                }
                diaryDetails.push(data);
                chrome.storage.sync.set({ 'DIARY_DATA': diaryDetails }, function () {
                    alert('Success! saved your dairy');
                });
            }
        } 
    });

    viewApp.addEventListener('click', function(){
        console.log('Clicked view app button');
        chrome.tabs.create({url: chrome.extension.getURL('dairy.html')});
    })
});