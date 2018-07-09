function NodeItem(data) {
    this.data = data;

    var container = document.createElement("li"),
        title = container.appendChild(document.createElement("div"));

    title.innerHTML = this.data.title;

    this.element = container;
}

NodeItem.prototype = {
    // lazy children element creation - not all nodes have children
    getChildrenElement: function () {
        return this._childElement = this._childElement || this.element.appendChild(document.createElement("ul"));
    }
};
//api/CatalogApi/Get
$.ajax({
    type: "GET",
    url: urlServer + '/api/CatalogApi/Get',
    contentType: "application/json;charset=utf-8",
    success: function (data, status, xhr) {
        treeData = data;
        var nodeCollection = treeData.map(function (node) { return new NodeItem(node); });

        // for faster lookup, store all nodes by their id
        var nodesById = {};
        for (var i = 0; i < nodeCollection.length; i++) nodesById[nodeCollection[i].data.id] = nodeCollection[i];

        var rootNodeItemsContainer = document.createElement("ul");

        // the magic happens here:
        // every node finds its parent (by the id), and it's being adopted by the parent's children element
        // that, actually, builds the tree, before it's in the document
        // all root nodes are appended to a root container which is appended to an element on the document
        for (var i = 0; i < nodeCollection.length; i++) {
            var node = nodeCollection[i];
            var parentElement = node.data.parentId ? nodesById[node.data.parentId].getChildrenElement() : rootNodeItemsContainer;
            parentElement.appendChild(node.element);
        }

        document.body.appendChild(rootNodeItemsContainer);

    },
    beforeSend: function (xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + token.access_token); },
    error: function (xhr) {
        alert(xhr.responseText);
    }
});
// convert all nodes to NodeItem instance
