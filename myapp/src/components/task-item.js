import { useDrag } from 'react-dnd'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaTrash } from 'react-icons/fa'

export default function TaskItem({ task, onDelete }) {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <motion.div
      ref={drag}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.03 }}
      className={`p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md cursor-move ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold dark:text-white">{task.description}</h3>
        <button
          onClick={() => onDelete(task._id)}
          className="text-red-500 hover:text-red-700 transition-colors"
          aria-label="Delete task"
        >
          <FaTrash />
        </button>
      </div>
      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
        <FaCalendarAlt className="mr-2" />
        <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
      </div>
    </motion.div>
  )
}