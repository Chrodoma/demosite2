        function getUsers4() {
            $.ajax({
                'url': 'http://localhost:8983/solr/select',
                'data': { 'wt': 'json', 'q': '*' },
                'success': function (data) {
                    alert(data.response.docs[1].name);
                    $('#userlist').append(data.response.docs[0]);
                    $.each(data.response.docs, function (index, docs) {
                        $('#userlist').append('&nbsp;<div class="list-group"  style="width:35%";><a href="#" class="list-group-item"><h4 class="list-group-item-heading">' + docs.name + '</h4><p class="list-group-item-text">Member ID:' + docs.member_id + '</p><p class="list-group-item-text">Type:' + docs.type + '</p></a></div>');
                    })
                },
                'dataType': 'jsonp',
                'jsonp': 'json.wrf'
            });
        }



