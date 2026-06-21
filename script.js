const taskcard = `
<div class="task-item">
    <div class="task-checkbox" onclick="toggleTask()"></div>
    <div class="tas-content">
        <div class="task-title">Cooking something</div>
    </div>
    <span class="status-badge status-something"></span>
    <div class="priority-badge priority-something">
        <i class="fas fa-circle"></i>
    </div>
    <div class="avatar"></div>
    <button class="icon-btn" style="width: 30px; height: 30px;" onclick="editTask()" type="button" title="Task action">
        <i class="fas fa-pen" style="font-size: 12px;"></i>
    </button>
    <button class="icon-btn" style="width: 30px; height: 30px;" onclick="deleteTask()" type="button" title="Task action">
        <i class="fas fa-trash" style="font-size: 12px;"></i>
    </button>
</div>
`;
    