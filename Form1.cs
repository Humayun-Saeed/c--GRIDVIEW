using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace grid_view
{
   
    public partial class Form1 : Form
    {
        DataTable data = new DataTable();
        public Form1()
        {
            InitializeComponent();
            data.Columns.Add("name");
            data.Columns.Add("age");
            data.Columns.Add("cnic");
            // DataRow row1 = data.NewRow();
            dataGridView1.Refresh();

        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            
        }

       public void button1_Click(object sender, EventArgs e)
        {
           
            DataRow row1 = data.NewRow();
            row1["name"] = textBox1.Text;
            row1["age"] = textBox2.Text;
            row1["cnic"] = textBox3.Text;
            MessageBox.Show(row1["cnic"].ToString());
            data.Rows.Add(row1);
            dataGridView1.DataSource = data;
            if (row1["cnic"] == row1["cnic"])
            {
                MessageBox.Show("this record is already exit: ");
            }

        }

        public void button2_Click(object sender, EventArgs e)
        {
           

            
           
        }
    }
}
