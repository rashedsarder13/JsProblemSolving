function simplifyPath(path) {
    // Split the path by '/' to get each directory/file name
    const dirs = path.split('/');
    const stack = [];

    // Iterate over each directory/file name
    for (let dir of dirs) {
        // If the current directory is a dot or empty, skip it
        if (dir === '.' || dir === '') {
            continue;
        }
        // If the current directory is a double-dot, pop the last directory from stack
        if (dir === '..') {
            stack.pop();
        } else {
            // Otherwise, push the current directory onto the stack
            stack.push(dir);
        }
    }

    // Join the directories on the stack with '/' and add a leading '/'
    return '/' + stack.join('/');
}
const path = '/home/user/../././documents/../pictures';
const simplifiedPath = simplifyPath(path);
console.log(simplifiedPath); // Output: '/home/pictures'
