var dagcomponentfuncs = window.dashAgGridComponentFunctions = window.dashAgGridComponentFunctions || {};


dagcomponentfuncs.CustomTooltip = function (props) {
    const column = props.column.colDef['field'];

    return React.createElement('div', {}, [
        React.createElement(
            window.dash_bootstrap_components.Tooltip,
            {
                target: `${column}_${props.rowIndex}`,
                placement: 'top-start',
                trigger: "hover focus",
                class_name: "",
                fade: true,
                flip: true,
                is_open: false,
                delay: {
                    "hide": 0,
                    "show": 0
                },
                style: {
                    "max-width": "500px",
                    "background-color": "#444444",
                    "color": "#FFFFFF",
                    "opacity": "1",
                    "text-align": "center",
                    "border-radius": "5px",
                    "font-size": "11px",
                    "padding": "4px 10px",
                    
                    // 文本自动换行
                    "overflow": "hidden",
                    "word-wrap": "break-word",
                    "word-break":"break-all",
                }
            },
            props.value // tooltip 中展示的内容
        ),
        React.createElement(
            "div",
            {
                id: `${column}_${props.rowIndex}`,
                style: {
                    // 文本超长部分以省略号显示
                    "overflow": "hidden",
                    "text-overflow": "ellipsis",
                    "white-space": "nowrap",
                }
            },
            props.value // 表格内展示的内容
        )
    ])
};
