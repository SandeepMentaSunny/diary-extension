document.addEventListener('DOMContentLoaded', function () {
    var diaryData = [], diary;
    chrome.storage.sync.get(['DIARY_DATA'], function (result) {
        diary = JSON.stringify(result.DIARY_DATA) || [];
        if(typeof diary == "string"){
            diaryData = JSON.parse(diary);
        }else{
            diaryData = diary;
        }
        if(diaryData.length > 0){
        var html = "<table class='table table-responsive table-striped table-responsive'>";
        html += "<thead>";
        html += "<tr>";
        html += "<th>Date & Time</th>";
        html += "<th>Title</th>";
        html += "<th>Description</th>";
        html += "</tr>";
        html += "</thead>";
        html += "<tbody>";
        for (var i = 0; i < diaryData.length; i++) {
            html+="<tr>";
            html+="<td>"+ new Date(diaryData[i].DATE) +"</td>";
            html+="<td>"+diaryData[i].TITLE+"</td>";
            html+="<td>"+diaryData[i].DESCRIPTION || diaryData[i].DESCRITION+"</td>";
            html+="</tr>";
        
        }
        html += "</tbody>";
        html+="</table>";
        document.getElementById("box").innerHTML = html;
        }else{
            document.getElementById("box").innerHTML = "No Diary Data found. Please add your first Diary";
            document.getElementById('box').className= "alert alert-success container";
        }
    })
});