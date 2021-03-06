"""empty message

Revision ID: f94dd6a6b9d1
Revises: b7628aa0b101
Create Date: 2019-05-26 14:05:32.422785

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f94dd6a6b9d1'
down_revision = 'b7628aa0b101'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('silos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('owner_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['owner_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('phrags', sa.Column('silo_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'phrags', 'silos', ['silo_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'phrags', type_='foreignkey')
    op.drop_column('phrags', 'silo_id')
    op.drop_table('silos')
    # ### end Alembic commands ###
